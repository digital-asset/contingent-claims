.. Copyright (c) 2022 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
.. SPDX-License-Identifier: Apache-2.0

.. _module-contingentclaims-observation-52423:

Module ContingentClaims.Observation
===================================

Data Types
----------

.. _type-contingentclaims-observation-observation-36736:

**data** `Observation <type-contingentclaims-observation-observation-36736_>`_ t x o

  Concrete implementation of ``Observable``, which can be serialized\.
  Conceptually it's helpful to think of this as the type ``t -> x``, or ``t -> Update x``\.
  
  .. _constr-contingentclaims-observation-const-70708:
  
  `Const <constr-contingentclaims-observation-const-70708_>`_
  
    A named constant
    
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - value
         - x
         - 
  
  .. _constr-contingentclaims-observation-observe-10987:
  
  `Observe <constr-contingentclaims-observation-observe-10987_>`_
  
    A named parameter
    
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - key
         - o
         - 
  
  .. _constr-contingentclaims-observation-add-72670:
  
  `Add <constr-contingentclaims-observation-add-72670_>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o, `Observation <type-contingentclaims-observation-observation-36736_>`_ t x o)
  
  
  .. _constr-contingentclaims-observation-neg-68861:
  
  `Neg <constr-contingentclaims-observation-neg-68861_>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o)
  
  
  .. _constr-contingentclaims-observation-mul-65149:
  
  `Mul <constr-contingentclaims-observation-mul-65149_>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o, `Observation <type-contingentclaims-observation-observation-36736_>`_ t x o)
  
  
  .. _constr-contingentclaims-observation-div-87698:
  
  `Div <constr-contingentclaims-observation-div-87698_>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o, `Observation <type-contingentclaims-observation-observation-36736_>`_ t x o)
  
  
  **instance** Corecursive (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o) (`ObservationF <type-contingentclaims-observation-observationf-8193_>`_ t x o)
  
  **instance** Recursive (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o) (`ObservationF <type-contingentclaims-observation-observationf-8193_>`_ t x o)
  
  **instance** `Functor <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-base-functor-31205>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x)
  
  **instance** (`Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ x, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ o) \=\> `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o)
  
  **instance** `Additive <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-additive-25881>`_ x \=\> `Additive <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-additive-25881>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o)
  
  **instance** `Multiplicative <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-multiplicative-10593>`_ x \=\> `Divisible <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-divisible-86689>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o)
  
  **instance** `Multiplicative <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-multiplicative-10593>`_ x \=\> `Multiplicative <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-multiplicative-10593>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o)
  
  **instance** (`Additive <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-additive-25881>`_ x, `Multiplicative <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-multiplicative-10593>`_ x) \=\> `Number <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-number-53664>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o)
  
  **instance** (`Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ t, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ x, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ o) \=\> `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o)

.. _type-contingentclaims-observation-observationf-8193:

**data** `ObservationF <type-contingentclaims-observation-observationf-8193_>`_ t x o b

  .. _constr-contingentclaims-observation-constf-89713:
  
  `ConstF <constr-contingentclaims-observation-constf-89713_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - value
         - x
         - 
  
  .. _constr-contingentclaims-observation-observef-44560:
  
  `ObserveF <constr-contingentclaims-observation-observef-44560_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - key
         - o
         - 
  
  .. _constr-contingentclaims-observation-addf-6843:
  
  `AddF <constr-contingentclaims-observation-addf-6843_>`_ (b, b)
  
  
  .. _constr-contingentclaims-observation-negf-14222:
  
  `NegF <constr-contingentclaims-observation-negf-14222_>`_ b
  
  
  .. _constr-contingentclaims-observation-mulf-34126:
  
  `MulF <constr-contingentclaims-observation-mulf-34126_>`_ (b, b)
  
  
  .. _constr-contingentclaims-observation-divf-86887:
  
  `DivF <constr-contingentclaims-observation-divf-86887_>`_ (b, b)
  
  
  **instance** Corecursive (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o) (`ObservationF <type-contingentclaims-observation-observationf-8193_>`_ t x o)
  
  **instance** Recursive (`Observation <type-contingentclaims-observation-observation-36736_>`_ t x o) (`ObservationF <type-contingentclaims-observation-observationf-8193_>`_ t x o)
  
  **instance** `Functor <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-base-functor-31205>`_ (`ObservationF <type-contingentclaims-observation-observationf-8193_>`_ t x o)
  
  **instance** (`Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ x, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ o, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ b) \=\> `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ (`ObservationF <type-contingentclaims-observation-observationf-8193_>`_ t x o b)
  
  **instance** (`Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ x, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ o, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ b) \=\> `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ (`ObservationF <type-contingentclaims-observation-observationf-8193_>`_ t x o b)
  
  **instance** `Foldable <https://docs.daml.com/daml/stdlib/DA-Foldable.html#class-da-foldable-foldable-25994>`_ (`ObservationF <type-contingentclaims-observation-observationf-8193_>`_ t x o)
  
  **instance** `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ (`ObservationF <type-contingentclaims-observation-observationf-8193_>`_ t x o)

.. _type-contingentclaims-observation-t-26484:

**type** `T <type-contingentclaims-observation-t-26484_>`_
  \= `Observation <type-contingentclaims-observation-observation-36736_>`_

Functions
---------

.. _function-contingentclaims-observation-pure-48671:

`pure <function-contingentclaims-observation-pure-48671_>`_
  \: x \-\> `Observation <type-contingentclaims-observation-observation-36736_>`_ t x o
  
  Lift a constant to an observation

.. _function-contingentclaims-observation-observe-43610:

`observe <function-contingentclaims-observation-observe-43610_>`_
  \: o \-\> `Observation <type-contingentclaims-observation-observation-36736_>`_ t x o
  
  Look up the value of ``o``

.. _function-contingentclaims-observation-eval-9779:

`eval <function-contingentclaims-observation-eval-9779_>`_
  \: (`Number <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-number-53664>`_ x, `Divisible <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-divisible-86689>`_ x, `Action <https://docs.daml.com/daml/stdlib/Prelude.html#class-da-internal-prelude-action-68790>`_ m) \=\> (o \-\> t \-\> m x) \-\> `Observation <type-contingentclaims-observation-observation-36736_>`_ t x o \-\> t \-\> m x
  
  Reify the ``Observable`` into an observation function\.
  The function is only total when the first argument is too (typically it will fail on ``t`` \> today)\.

.. _function-contingentclaims-observation-mapparams-82796:

`mapParams <function-contingentclaims-observation-mapparams-82796_>`_
  \: (t \-\> i) \-\> (o \-\> o') \-\> (x \-\> x') \-\> `Observation <type-contingentclaims-observation-observation-36736_>`_ i x o \-\> `Observation <type-contingentclaims-observation-observation-36736_>`_ t x' o'
  
  The functor map operation *and* also map any parameters to keys\.
  For example, could map the param \"spot\" to an ISIN code \"GB123456789\"\.
  Also contra\-maps time parameter, i\.e\. from relative time values to absolute ones\.
  
  @ mapParams identity \= bimap
