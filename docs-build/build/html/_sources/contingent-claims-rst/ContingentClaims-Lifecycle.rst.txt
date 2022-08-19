.. Copyright (c) 2022 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
.. SPDX-License-Identifier: Apache-2.0

.. _module-contingentclaims-lifecycle-18151:

Module ContingentClaims.Lifecycle
=================================

Data Types
----------

.. _type-contingentclaims-lifecycle-pending-5107:

**data** `Pending <type-contingentclaims-lifecycle-pending-5107_>`_ t a

  Used to specify pending payments\.
  
  .. _constr-contingentclaims-lifecycle-pending-40086:
  
  `Pending <constr-contingentclaims-lifecycle-pending-40086_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - t
         - t
         - payment time
       * - amount
         - `Decimal <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-decimal-18135>`_
         - amount of asset to be paid
       * - asset
         - a
         - asset in which the payment is denominated
  
  **instance** (`Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ t, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ a) \=\> `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ (`Pending <type-contingentclaims-lifecycle-pending-5107_>`_ t a)
  
  **instance** (`Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ t, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ a) \=\> `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ (`Pending <type-contingentclaims-lifecycle-pending-5107_>`_ t a)

.. _type-contingentclaims-lifecycle-result-15592:

**data** `Result <type-contingentclaims-lifecycle-result-15592_>`_ t a o

  Returned from a ``lifecycle`` operation\.
  
  .. _constr-contingentclaims-lifecycle-result-77431:
  
  `Result <constr-contingentclaims-lifecycle-result-77431_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - pending
         - \[`Pending <type-contingentclaims-lifecycle-pending-5107_>`_ t a\]
         - Payments requiring settlement\.
       * - remaining
         - C t a o
         - The tree after lifecycled branches have been pruned\.
  
  **instance** (`Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ a, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ o, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ t) \=\> `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ (`Result <type-contingentclaims-lifecycle-result-15592_>`_ t a o)
  
  **instance** (`Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ t, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ a, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ o) \=\> `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ (`Result <type-contingentclaims-lifecycle-result-15592_>`_ t a o)

Functions
---------

.. _function-contingentclaims-lifecycle-lifecycle-67916:

`lifecycle <function-contingentclaims-lifecycle-lifecycle-67916_>`_
  \: (`Ord <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-ord-6395>`_ t, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ a, `CanAbort <https://docs.daml.com/daml/stdlib/Prelude.html#class-da-internal-lf-canabort-29060>`_ m) \=\> (o \-\> t \-\> m `Decimal <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-decimal-18135>`_) \-\> C t a o \-\> t \-\> t \-\> m (`Result <type-contingentclaims-lifecycle-result-15592_>`_ t a o)
  
  Collect claims falling due into a list, and return the tree with those nodes pruned\.
  ``m`` will typically be ``Update``\. It is parametrised so it can be run in a ``Script``\.
  The first argument is used to lookup the value of any ``Observables``\.
  Returns the pruned tree \+ pending settlements up to the provided market time\.

.. _function-contingentclaims-lifecycle-exercise-67423:

`exercise <function-contingentclaims-lifecycle-exercise-67423_>`_
  \: (`Ord <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-ord-6395>`_ t, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ a, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ o, `CanAbort <https://docs.daml.com/daml/stdlib/Prelude.html#class-da-internal-lf-canabort-29060>`_ m) \=\> (o \-\> t \-\> m `Decimal <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-decimal-18135>`_) \-\> (`Bool <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-bool-66265>`_, C t a o) \-\> C t a o \-\> t \-\> t \-\> m (C t a o)

.. _function-contingentclaims-lifecycle-expire-43030:

`expire <function-contingentclaims-lifecycle-expire-43030_>`_
  \: (`Ord <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-ord-6395>`_ t, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ a, `CanAbort <https://docs.daml.com/daml/stdlib/Prelude.html#class-da-internal-lf-canabort-29060>`_ m) \=\> (o \-\> t \-\> m `Decimal <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-decimal-18135>`_) \-\> C t a o \-\> t \-\> t \-\> m (C t a o)
  
  Replace any subtrees that have expired with ``Zero``s\.
