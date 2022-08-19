.. Copyright (c) 2022 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
.. SPDX-License-Identifier: Apache-2.0

.. _module-contingentclaims-util-35610:

Module ContingentClaims.Util
============================

Functions
---------

.. _function-contingentclaims-util-fixings-85991:

`fixings <function-contingentclaims-util-fixings-85991_>`_
  \: :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o \-\> \[t\]
  
  Return the fixing dates of a claim\. This does not discriminate between
  optional dates which *may* result from a condition, and outright fixings\. It
  also does not correctly account for malformed trees, where subtrees are
  orphaned due to impossible ``When`` statements\. e\.g\. ``When (t > 1) ((When t < 1) _)``

.. _function-contingentclaims-util-expiry-73111:

`expiry <function-contingentclaims-util-expiry-73111_>`_
  \: `Ord <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-ord-6395>`_ t \=\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o \-\> `Optional <https://docs.daml.com/daml/stdlib/Prelude.html#type-da-internal-prelude-optional-37153>`_ t
  
  Return the time after which the claim is worthless i\.e\. value \= 0, if such a
  time exists\. Also known as 'maturity' or 'horizon' in the Eber/Jones paper\.

.. _function-contingentclaims-util-payoffs-21421:

`payoffs <function-contingentclaims-util-payoffs-21421_>`_
  \: (`Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ x, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ o, `Multiplicative <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-multiplicative-10593>`_ x) \=\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o \-\> \[(:ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o, a)\]
  
  Return a list of possible scale\-factor/payoff pairs\.
  This does not discriminate between conditional and outright payoffs\.

.. _function-contingentclaims-util-prunezeros-11483:

`pruneZeros <function-contingentclaims-util-prunezeros-11483_>`_
  \: :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o
  
  Prunes sub\-trees which are ``Zero``\.

.. _function-contingentclaims-util-iszero-28308:

`isZero <function-contingentclaims-util-iszero-28308_>`_
  \: :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o \-\> `Bool <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-bool-66265>`_
  
  This avoids requiring the equality type constraint on ``a``
