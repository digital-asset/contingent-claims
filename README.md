# Contingent Claims

This is a library for modelling contingent claims, i.e. derivatives. Briefly, a derivative is represented by a tree of `Claim`s, which describe the future cashflows between two parties.

The implementation closely follows the papers [[1]](#1), [[2]](#2).

To get started, go to the [quickstart](./QUICKSTART.md), or look in the [test directory](./test/daml/Test/FinancialContract.daml) for an example of how to create and lifecycle contracts.

# Copyright & License

*Copyright © 2022, Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.*

Distributed under the Apache 2.0 License.

# Requirements

To build this library locally, the following requirements necessary are :

1. Daml Connect (2.0)
2. `make` (3.x)
3. `yq` (4.x)

# Dependencies

There is a dependency on [daml-ctl](https://github.com/digital-asset/daml-ctl).

# Building

To build a release version (no tests in the `*.dar`) by running `make build` in the root directory. To build a dev version that includes test from `test`, run `make build-dev`.

Source-code documentation can be generated through `make doc`.

# Releases

We aim to adhere to the 'semantic versioning' scheme. [Upgrading.md](./UPGRADING.md) documents breaking changes across versions.

# Contribution Policy

If you wish to contribute to this project, please contact us first via Github. In future, we do plan to accept external contributions, contingent on the Digital Asset CLA.

# References

<a id="1">[1]</a>
Jones, S. Peyton, Jean-Marc Eber, and Julian Seward.
"Composing contracts: an adventure in financial engineering."
ACM SIG-PLAN Notices 35.9 (2000): 280-292.

<a id="2">[2]</a>
Jones, SL Peyton, and J. M. Eber.
"How to write a financial contract",
volume "Fun Of Programming" of "Cornerstones of Computing." (2005).


