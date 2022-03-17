# Lifecycling

This page aims to explain and clarify

- the goal of the lifecycling functionality in the library

- the assumptions that have been made in its implementation

We will be using dates in the examples below, but the same applies when the time type parameter is `Time`.

## Introduction: evolution of a contract

In the model outlined in [[1]](#1), a financial contract evolves over time. As an example, let us consider the contract `c1`

```Haskell
When (t ≥ t_1) (Scale (Observe "USD_LIBOR_3M") (When (t ≥ t_2) (One “USD”)))
```

which we acquired at a time `t_0` with `t_0` ≤ `t_1` ≤ `t_2`.

Economically, this contract observes a certain rate at time `t_1` and pays its amount in dollars at time `t_2`.

In order to understand how the contract evolves over time, we need to recall that `when cond c` acquires the underlying contract on the first instant the condition becomes `True`.

Thus, exactly at time `t_1`, the condition on the outer `when` is met and we acquire `c2`

```Haskell
Scale (Observe "USD_LIBOR_3M") (When (t ≥ t_2) (One “USD”))
```

as replacement for the initial contract.

As soon as we acquire `c2`, because of the `scale` node, we acquire `c3`

```Haskell
USD_LIBOR_3M(t_1) * (When (t ≥ t_2) (One “USD”)
```

as a replacement for `c2`.

Finally, once `t_2` has arrived, the condition on the remaining `when` is met and we acquire `c4`

```Haskell
USD_LIBOR_3M(t_1)) * (One “USD”)
```

as a replacement for `c3`.

This contract does not include additional dynamics and will not evolve further. In a financial setting, this is when a payment is made to the contract owner for the amount due:

- USD_LIBOR_3M(t_1) USD is paid to the contract holder

- `c4` is replaced with `Zero`, the contract indicating the absence of a claim.

## Lifecycle functionality

In order to replicate this contract evolution process for a generic contract, we need to address two problems:

- given a contract, we need a way to figure out when a relevant event has happened (specifically, the next relevant event date)

- then, we need to be able to evolve the contract according to the rules defined by our contract primitives

The lifecycling functionality of the library addresses the latter problem.

### Types of event dates

Assuming that once we acquire a `One a`, this is immediately paid to the contract holder, We can classify event dates (or time instants) as

- expiry date: when the contract evolves to `Zero` or is equivalent (in the valuation semantics sense) to the `Zero` contract

- payment date: when a `One a` is acquired (usually multiplied by some constant amount)

- exercise date: when the contract holder makes an election (`Or` or `Anytime` nodes)

- fixing date: when the value of an observable is evaluated (usually after a condition on a `When` block becomes true)

In the example above, `t_1` would be a fixing date and `t_2` a payment date, as well as the expiry date.

### Determining event dates

Once we have acquired a contract `c` at a time `t_0`, the next event date is due to either

- an election being made on an `Anytime` node by the contract holder

- a condition within a `When` or `Until` node becoming `True`

- the contract becoming equivalent to the `Zero` contract (e.g. if the probability of the condition within a `When` node becoming `True` is zero)

Event dates related to `When` and `Until` conditions are modelled as stopping times of stochastic processes: these processes need to be continuously observed in order to determine when the event occurs. An exception to this are cases where the next event date is a deterministic time, for instance when using the condition `t ≥ t_1`: in this case, even before `t_1` we know that `t_1` will be an event date.

### Upper bound for the expiry date

TODO: describe cases when an upper bound to the expiry date of the contract is deterministically known.

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

The second feature facilitates handling of contracts with many fixing dates but only few payment dates (e.g. barrier options, OIS swaps). However, it adds additional complexity: when we lifecycle at a payment or election date, we need to be able to collect the cumulated effects of all previous fixing events.

### Implementation assumptions

The features described above are difficult to implement in practice. The following assumptions are made to simplify the implementation.

#### Boolean Conditions

The boolean conditions within a `When` or `Until` node can be of the form

- `t ≥ t_0`

- `o1(t) ≤ o2(t)` for two observables `o1`, `o2`

The former allows for the deterministic determination of the first instant a condition is met. The latter might be of stochastic nature.

#### Contract acquisition date

Assume that we invoke the lifecycle function on a contract `c1` at a time `t`:

- if `c1` is a `When {t ≥ t_0} c2` with `t_0` ≤ `t1`, then `c2` is acquired at time `t_0`

- if `c1` is a `When {o1 ≤ o2} c2` with `t_0` ≤ `t1` and the condition is `True` at time `t`, then `c2`is acquired at time `t`

This means that, in the case of a stochastic condition, we assume `t` to be the first instant when the condition has become `True`.

## References

<a id="1">[1]</a>
Jones, SL Peyton, and J. M. Eber.
"How to write a financial contract",
volume "Fun Of Programming" of "Cornerstones of Computing." (2005).
