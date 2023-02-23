[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/digital-asset/daml/blob/main/LICENSE)
[![CircleCI](https://circleci.com/gh/digital-asset/contingent-claims.svg?style=shield)](https://circleci.com/gh/digital-asset/contingent-claims)

Copyright © 2022 Digital Asset (Switzerland) GmbH and/or its affiliates. All Rights Reserved. SPDX-License-Identifier: Apache-2.0

# Contingent Claims

## :mega: Deprecation notice :mega:

The Contingent Claims library is now part of [Daml Finance](https://www.digitalasset.com/daml-finance) and development is continuing on the [Daml Finance repository](https://github.com/digital-asset/daml-finance).

You can read more about it on [Digital Asset's website](https://www.digitalasset.com/daml-finance) or jump straight into [the code](https://github.com/digital-asset/daml-finance).

## Contingent Claims

This is a library for modeling contingent claims, i.e. derivatives, written in the smart contract language [Daml](https://www.digitalasset.com/developers). Briefly, a derivative is represented by a tree of `Claim`s, which describe future cashflows between two parties as well as the conditions under which these cashflows occur.

The library offers life-cycling capabilities, as well as a valuation semantics that maps a claim to a mathematical expression that can be used for no-arbitrage pricing.

The implementation closely follows the model outlined in the papers [[1]](#1), [[2]](#2).

To get started, we recommend reading through the [quickstart](./docs/QUICKSTART.md) document.

Examples of how to create and lifecycle contracts can be found in the [test directory](./test/daml/Test/FinancialContract.daml).

## How to use this library

To use the library in your Daml project, it is sufficient to download the latest `*.dar` file from the [releases page](https://github.com/digital-asset/contingent-claims/releases/) and add it as a dependency to your project.

## Releases

Releases adhere to the 'semantic versioning' specification. Breaking changes across major versions are documented in [Upgrading.md](./docs/UPGRADING.md). The steps required to release this library are documented in [RELEASE.MD](./docs/RELEASE.MD).

## Building the code

In order to build the code from source, follow these instructions.

1. Clone the repository

2. Make sure the [Daml SDK](https://docs.daml.com/getting-started/installation.html) is installed on your machine

3. Fetch the `*.dar` file for the latest version of the [daml-ctl](https://github.com/digital-asset/daml-ctl/releases) library and copy it to the `lib/` folder in the repository's root

4. You can then build a release version (no tests in the `*.dar`) by running `daml build` in the root directory, or a dev version that includes tests from the `test` directory.

We also provide an unsupported `Makefile` with targets for said tasks.

### Running the tests

Navigate to the `test` directory and run `daml test`.

### API documentation

API documentation for the latest release is available online [here](https://digital-asset.github.io/contingent-claims/).

You can also build this locally using the SDK command `daml damlc docs` from the root directory. There is also an unsupported `make doc` target.

## Contribution Policy

If you wish to contribute to this project, please contact us first via Github. In future, we do plan to accept external contributions, contingent on the Digital Asset CLA.

## References

<a id="1">[1]</a>
Jones, S. Peyton, Jean-Marc Eber, and Julian Seward.
"Composing contracts: an adventure in financial engineering."
ACM SIG-PLAN Notices 35.9 (2000): 280-292.

<a id="2">[2]</a>
Jones, SL Peyton, and J. M. Eber.
"How to write a financial contract",
volume "Fun Of Programming" of "Cornerstones of Computing." (2005).

The papers can be downloaded from [Microsoft Research](https://www.microsoft.com/en-us/research/publication/composing-contracts-an-adventure-in-financial-engineering/).
