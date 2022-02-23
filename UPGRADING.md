# Upgrading

This document contains upgrade instructions for major (and other significant) versions

## 2.0.0

* The SDK verison is now ≥ 2.0
* This version unifies `Claim` and `Claim.Serializable`. Replace all instances of the latter with the former.
* As result of the above, infix notation is broken so you can no longer write e.g.

```haskell
a `And` b `And` c
```

instead, you should now use lower-case smart constructors i.e.

```haskell
import Prelude hiding (and)

a `and` b `and` c
```
Beware that infix notation is inefficient - consider using the new `Monoid` instance `mconcat` when necessary. Better yet, use the higher-level financial primitives in `ContingentClaims.Financial` module instead.
