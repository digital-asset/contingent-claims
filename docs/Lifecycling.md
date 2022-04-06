# Lifecycling

This page aims to explain and clarify

- the goal of the lifecycling functionality in the library

- the assumptions that have been made in its implementation

We will be using dates in the examples below, but the same applies when the time type parameter is `Time`.

## Introduction: evolution of a contract

In the model outlined in [[1]](#1), a financial contract evolves over time. As an example, let us consider the contract `c1`

```Haskell
When (t ≥ t_1) (Scale (Observe "S" - K) (When (t ≥ t_2) (One “USD”)))
```

which we acquired at a time `t_0` with `t_0` ≤ `t_1` ≤ `t_2`.

Economically, this contract observes a certain value `S(t)` at time `t_1` and pays the contract holder an amount `S(t_1) - K` in dollars at time `t_2`. Many will recognize in this expression the payoff of an equity forward contract, where `S` is the stock's spot price and `K` is the strike price.

In order to understand how the contract evolves over time, we need to recall that `When pred c` acquires the underlying contract on the first instant the predicate `pred` becomes `True`.

Thus, exactly at time `t_1`, the boolean condition on the outer `When` is met and we acquire `c2`

```Haskell
Scale (Observe "S" - K) (When (t ≥ t_2) (One “USD”))
```

as a replacement for the initial contract.

As soon as we acquire `c2`, because of the `Scale` node, we acquire `c3`

```Haskell
(S(t_1) - K) * (When (t ≥ t_2) (One “USD”)
```

as a replacement for `c2`.

Finally, once `t_2` has arrived, the predicate on the remaining `When` is met and we acquire `c4`

```Haskell
(S(t_1) - K) * (One “USD”)
```

as a replacement for `c3`.

This contract does not include additional dynamics and will not evolve further. In a financial setting, this is when a payment is made to the contract owner for the amount due:

- S(t_1) - K USD is paid to the contract holder

- `c4` is replaced with `Zero`, the contract indicating the absence of a claim.

## Lifecycle functionality

In order to replicate this evolution process for a generic contract, we need to address two problems:

- given a contract, we need a way to figure out when a relevant event has happened (specifically, the next relevant event date)

- then, we need to be able to evolve the contract according to the rules defined by our contract primitives

The lifecycling functionality of the library addresses the latter problem.

### Transient vs Stable nodes

As we can see from the example above, there are some nodes that, once acquired, are immediately consumed and trigger the acquisition of another contract.

A transient contract is a contract whose outer node is transient.

Transient nodes:

- `Scale`, `One`, `Or`, `And`, `Cond`, `Give`
- `When pred c` when `pred` is `True` at the time of acquisition
- `Until pred c` when `pred` is `True` at the time of acquisition
- `Until pred c` when `c` is transient contract

Stable nodes:

- `Zero`, `Anytime`
- `When pred c` when `pred` is `False` at the time of acquisition
- `Until pred c` when `pred` is `False` at the time of acquisition and `c` is not transient

As a rule of thumb, the lifecycling function shall not return a transient contract.

### Types of event dates

Assuming that, once we acquire a `One a`, this is immediately paid to the contract holder, we can classify event dates (or time instants) as

- expiry date: the date after which the contract evolves to `Zero` or is equivalent (in the valuation semantics sense) to the `Zero` contract

- payment date: when a `One a` is acquired (usually multiplied by some known amount)

- exercise date: when the contract holder makes an election (`Or` or `Anytime` nodes)

- fixing date: when the value of an observable is evaluated (usually after a condition on a `When` block becomes true)

In the example above, `t_1` would be a fixing date and `t_2` a payment date, as well as the expiry date.

### Determining event dates

Once we have acquired a contract `c` at a time `t_0`, the next event date is due to either

- an election being made on an `Anytime` node by the contract holder

- a boolean condition within a `When` or `Until` node becoming `True`

- the contract becoming equivalent to the `Zero` contract (e.g. if the probability of the boolean condition within a `When` node becoming `True` is zero)

Event dates related to `When` and `Until` predicates are modelled as stopping times of stochastic processes: these processes need to be continuously observed in order to determine when the event occurs. An exception to this are cases where the next event date is a deterministic time, for instance when using the predicate `t ≥ t_1`: in this case, even before `t_1` we know that `t_1` will be an event date.

### Desirable features of a lifecycle functionality

The lifecycle function takes as an input

- a claim `c`

- a date `t`

- potentially, an `election` made by the contract holder

and returns

- the evolved claim

- the amounts to be settled

Some features for this function are desirable:

1. if `t` does not correspond to an event date, the contract should not mutate

2. to reduce the number of contracts that need to be created, event dates that are exclusively fixing dates should not mutate the contract.

3. the time parameter in the lifecycle function should be decoupled from ledger time

The second feature facilitates handling of contracts with many fixing dates but only a few payment dates (e.g. barrier options, OIS swaps). However, it adds additional complexity: when we lifecycle at a payment or election date, we need to be able to look back in time and collect the cumulated effects of all previous fixing events.

The third feature ensures a degree of robustness with respect to disruptions of the running ledger. It also allows lifecycling as of a past or future date. The task of ensuring that a transaction (e.g. the election of an `Or` or `Anytime` node at time `t`) falls within a pre-defined range of ledger times is delegated to a separate integration layer and not handled in the library.

### Implementation assumptions

The second features described above is difficult to implement in practice. The following assumptions are made to simplify its implementation.

#### Boolean Predicates

The boolean predicates within a `When`, `Cond`, `Until` or `Anytime` node can be of the form

- `t ≥ t_0` for a time `t_0`

- `o1(t) ≤ o2(t)` for two observables `o1`, `o2`

The former allows for the deterministic determination of the first instant a condition is met. The latter generally is of stochastic nature.

#### Acquisition date of inner contracts

Assume that we invoke the lifecycle function on a contract `c1` at a time `t`:

- if `c1` is a `When {t ≥ t_0} c2` with `t_0` ≤ `t1`, then `c2` is acquired at time `t_0`

- if `c1` is a `When {o1 ≤ o2} c2` with `t_0` ≤ `t1` and the condition is `True` at time `t`, then `c2`is acquired at time `t`

This means that, in the case of a stochastic condition, we assume `t` to be the first instant when the condition has become `True`. This assumption allows us to move the very complex step of monitoring stochastic predicates out of the lifecycle function and into a dedicated component.

### List of lifecycle functions

Three functions embody the lifecycle functionality of the library.

- `lifecycle`: given a time `t` and an input claim `c`, it returns

  - the payments that fall due at or before t
  - the remaining claim

- `expire`: given a time `t` and an input claim `c`, it checks for expired sub-trees and return the pruned claim. Sub-trees typically expire when predicates within an `Until` node evaluate to `True`.

- `exercise`: given a time `t`, an input claim `c` and an election `e`, it applies the given election to `c` and returns the remaining claim

An election is represented by

- a boolean variable representing which party makes the election (contract holder or counterparty)
- the sub-contract `c_elected` that is acquired as a result of the election

### When do I need to lifecycle?

Given a contract `c`, acquired at time `t_0`, lifecycling is required

- on each potential payment date

- on the first instant that a stochastic predicate becomes `True`

TODO this is not exactly true, as we need to look only at those conditions that are "immediately" observable (aka anything outside the first Whens or Anytimes) --> this requires definition of "currently observed" predicate

The lifecycle workflow would typically entail

- calling the `lifecycle` function to collect payments

- calling the `expire` function to prune sub-trees that are worthless

- checking if an `election` is needed and, if so

  - perform it (`Or` node) by calling `exercise` and re-run the workflow with the updated claim

  - or, defer it to a later point in time (`Anytime` node)

Lifecycling on a non-event date is only detrimental for performance but it does not affect the contract's dynamics, so in principle one could execute the workflow above on a daily basis.

## References

<a id="1">[1]</a>
Jones, SL Peyton, and J. M. Eber.
"How to write a financial contract",
volume "Fun Of Programming" of "Cornerstones of Computing." (2005).
