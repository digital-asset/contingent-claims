.. Copyright (c) 2022 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
.. SPDX-License-Identifier: Apache-2.0

.. _module-contingentclaims-financial-79268:

Module ContingentClaims.Financial
=================================

Functions
---------

.. _function-contingentclaims-financial-unrolldates-63936:

`unrollDates <function-contingentclaims-financial-unrolldates-63936_>`_
  \: `Int <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-int-37261>`_ \-\> `Int <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-int-37261>`_ \-\> \[`Month <https://docs.daml.com/daml/stdlib/DA-Date.html#type-da-date-types-month-22803>`_\] \-\> `Int <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-int-37261>`_ \-\> \[`Date <https://docs.daml.com/daml/stdlib/Prelude.html#type-da-internal-lf-date-32253>`_\]
  
  Helper function to generate a series of fixing dates, e\.g\. for coupon payments in ``fixed``\.
  This assumes ``fixingMonths`` and ``fixingDates`` are ordered\.
  The Daml Finance library(https://github.com/digital-asset/daml-finance) has more feature\-complete date handling functions\.

.. _function-contingentclaims-financial-forward-70996:

`forward <function-contingentclaims-financial-forward-70996_>`_
  \: t \-\> :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o
  
  Forward agreement\. Discounted by (potentially stochastic) interest rate ``r``\.

.. _function-contingentclaims-financial-fra-53138:

`fra <function-contingentclaims-financial-fra-53138_>`_
  \: t \-\> t \-\> :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o \-\> :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o
  
  Forward rate agreement\.

.. _function-contingentclaims-financial-zcb-55986:

`zcb <function-contingentclaims-financial-zcb-55986_>`_
  \: t \-\> x \-\> ccy \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x ccy o
  
  Zero Coupon Bond\.

.. _function-contingentclaims-financial-floating-19068:

`floating <function-contingentclaims-financial-floating-19068_>`_
  \: :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o \-\> :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o \-\> ccy \-\> \[t\] \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x ccy o
  
  A floating rate bond\.

.. _function-contingentclaims-financial-fixed-49039:

`fixed <function-contingentclaims-financial-fixed-49039_>`_
  \: x \-\> x \-\> ccy \-\> \[t\] \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x ccy o
  
  A (fixed rate) coupon paying bond\.

.. _function-contingentclaims-financial-european-58413:

`european <function-contingentclaims-financial-european-58413_>`_
  \: t \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o
  
  European option on the passed claim\. e\.g\. call option on S&P 500\:
  
  .. code-block:: daml
  
    european (date 2021 05 14) (observe "SPX" - pure 4200)

.. _function-contingentclaims-financial-bermudan-54912:

`bermudan <function-contingentclaims-financial-bermudan-54912_>`_
  \: \[t\] \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o
  
  Bermudan option on the passed claim\. Given a pre\-defined set of times
  {t\_1, t\_2, \.\., t\_N}, it allows the holder to acquire the underlying claim on at
  most one of these times\.

.. _function-contingentclaims-financial-american-20032:

`american <function-contingentclaims-financial-american-20032_>`_
  \: t \-\> t \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o
  
  American option (knock\-in)\. The lead parameter is the first possible acquisition date\.

.. _function-contingentclaims-financial-swap-33135:

`swap <function-contingentclaims-financial-swap-33135_>`_
  \: (\[t\] \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o) \-\> (\[t\] \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o) \-\> \[t\] \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t x a o
  
  Asset swap on specific fixing dates ``[t]``\. For example\:
  
  .. code-block:: daml
  
    fixedUsdVsFloatingEur : [t] -> Serializable.Claim Text
    fixedUsdVsFloatingEur = fixed 100.0 0.02 "USD" `swap` floating (observe "USDEUR" * pure 100.0) (observe "EUR1M") "EUR"
