.. Copyright (c) 2022 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
.. SPDX-License-Identifier: Apache-2.0

.. _module-contingentclaims-claim-65747:

Module ContingentClaims.Claim
=============================

Data Types
----------

.. _type-contingentclaims-internal-claim-claim-98456:

**data** `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o

  Used to model cashflows of instruments\.
  See quickstart(../QUICKSTART.md) for detailed explanation\.
  In Peyton\-Jones' paper, this is called 'Contract'\.
  We renamed it to avoid ambiguity\.
  
  * ``t`` and ``x`` respectively correspond to the ``Observation``s input type and the resulting output type\.
  * ``a`` is the representation of an asset, e\.g\. a ``Text`` ISIN code\.
  * ``o`` is the representation of an observable, e\.g\. a ``Text``\.
  
  You should build the ``Claim`` using the smart constructors (e\.g\., ``zero``, ``and``) instead of using the data constructors directly (``Zero``, ``And``)\.
  
  .. _constr-contingentclaims-internal-claim-zero-8378:
  
  `Zero <constr-contingentclaims-internal-claim-zero-8378_>`_
  
    Represents an absence of claims\. Monoid ``And`` identity\.
  
  .. _constr-contingentclaims-internal-claim-one-44061:
  
  `One <constr-contingentclaims-internal-claim-one-44061_>`_ a
  
    The bearer acquires one unit of ``a``  *immediately*\.
  
  .. _constr-contingentclaims-internal-claim-give-25871:
  
  `Give <constr-contingentclaims-internal-claim-give-25871_>`_ (`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o)
  
    The obligations of the bearer and issuer are revesed\.
  
  .. _constr-contingentclaims-internal-claim-and-33238:
  
  `And <constr-contingentclaims-internal-claim-and-33238_>`_
  
    Used to combine multiple rights together\.
    
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - fst
         - `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
         - 
       * - snd
         - `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
         - 
       * - tail
         - \[`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o\]
         - 
  
  .. _constr-contingentclaims-internal-claim-or-27557:
  
  `Or <constr-contingentclaims-internal-claim-or-27557_>`_
  
    Gives the bearer the right to choose between several claims\.
    
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - fst
         - `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
         - 
       * - snd
         - `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
         - 
       * - tail
         - \[`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o\]
         - 
  
  .. _constr-contingentclaims-internal-claim-cond-5428:
  
  `Cond <constr-contingentclaims-internal-claim-cond-5428_>`_
  
    Gives the bearer the right to the first claim if ``predicate`` is true, else the second claim\.
    
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - predicate
         - `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o
         - 
       * - success
         - `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
         - 
       * - failure
         - `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
         - 
  
  .. _constr-contingentclaims-internal-claim-scale-69133:
  
  `Scale <constr-contingentclaims-internal-claim-scale-69133_>`_
  
    Multiplies the ``claim`` by ``k`` (which can be non\-deterministic)\.
    
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - k
         - :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o
         - 
       * - claim
         - `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
         - 
  
  .. _constr-contingentclaims-internal-claim-when-49564:
  
  `When <constr-contingentclaims-internal-claim-when-49564_>`_
  
    Defers the acquisition of ``claim`` until *the first instant* that ``predicate`` is true\.
    
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - predicate
         - `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o
         - 
       * - claim
         - `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
         - 
  
  .. _constr-contingentclaims-internal-claim-anytime-72652:
  
  `Anytime <constr-contingentclaims-internal-claim-anytime-72652_>`_
  
    Like ``When``, but valid any time the predicate is true (not just infinium)\.
    
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - predicate
         - `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o
         - 
       * - claim
         - `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
         - 
  
  .. _constr-contingentclaims-internal-claim-until-1103:
  
  `Until <constr-contingentclaims-internal-claim-until-1103_>`_
  
    Expires said claim on the *first instant* that ``predicate`` is true\.
    
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - predicate
         - `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o
         - 
       * - claim
         - `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
         - 
  
  **instance** Corecursive (`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o) (`ClaimF <type-contingentclaims-internal-claim-claimf-65301_>`_ t x a o)
  
  **instance** Recursive (`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o) (`ClaimF <type-contingentclaims-internal-claim-claimf-65301_>`_ t x a o)
  
  **instance** (`Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ a, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ x, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ o, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ t) \=\> `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ (`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o)
  
  **instance** (`Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ t, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ x, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ a, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ o) \=\> `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ (`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o)
  
  **instance** `Monoid <https://docs.daml.com/daml/stdlib/Prelude.html#class-da-internal-prelude-monoid-6742>`_ (`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o)
  
  **instance** `Semigroup <https://docs.daml.com/daml/stdlib/Prelude.html#class-da-internal-prelude-semigroup-78998>`_ (`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o)

.. _type-contingentclaims-internal-claim-claimf-65301:

**data** `ClaimF <type-contingentclaims-internal-claim-claimf-65301_>`_ t x a o b

  Unfixed version of ``Claim``, for use with ``Daml.Control.Recursion``\.
  
  .. _constr-contingentclaims-internal-claim-zerof-16259:
  
  `ZeroF <constr-contingentclaims-internal-claim-zerof-16259_>`_
  
  
  .. _constr-contingentclaims-internal-claim-onef-56942:
  
  `OneF <constr-contingentclaims-internal-claim-onef-56942_>`_ a
  
  
  .. _constr-contingentclaims-internal-claim-givef-38416:
  
  `GiveF <constr-contingentclaims-internal-claim-givef-38416_>`_ b
  
  
  .. _constr-contingentclaims-internal-claim-andf-51267:
  
  `AndF <constr-contingentclaims-internal-claim-andf-51267_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - fst
         - b
         - 
       * - snd
         - b
         - 
       * - tail
         - \[b\]
         - 
  
  .. _constr-contingentclaims-internal-claim-orf-54990:
  
  `OrF <constr-contingentclaims-internal-claim-orf-54990_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - fst
         - b
         - 
       * - snd
         - b
         - 
       * - tail
         - \[b\]
         - 
  
  .. _constr-contingentclaims-internal-claim-condf-29357:
  
  `CondF <constr-contingentclaims-internal-claim-condf-29357_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - predicate
         - `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o
         - 
       * - success
         - b
         - 
       * - failure
         - b
         - 
  
  .. _constr-contingentclaims-internal-claim-scalef-25046:
  
  `ScaleF <constr-contingentclaims-internal-claim-scalef-25046_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - k
         - :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o
         - 
       * - claim
         - b
         - 
  
  .. _constr-contingentclaims-internal-claim-whenf-15077:
  
  `WhenF <constr-contingentclaims-internal-claim-whenf-15077_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - predicate
         - `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o
         - 
       * - claim
         - b
         - 
  
  .. _constr-contingentclaims-internal-claim-anytimef-61653:
  
  `AnytimeF <constr-contingentclaims-internal-claim-anytimef-61653_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - predicate
         - `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o
         - 
       * - claim
         - b
         - 
  
  .. _constr-contingentclaims-internal-claim-untilf-23276:
  
  `UntilF <constr-contingentclaims-internal-claim-untilf-23276_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - predicate
         - `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o
         - 
       * - claim
         - b
         - 
  
  **instance** Corecursive (`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o) (`ClaimF <type-contingentclaims-internal-claim-claimf-65301_>`_ t x a o)
  
  **instance** Recursive (`Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o) (`ClaimF <type-contingentclaims-internal-claim-claimf-65301_>`_ t x a o)
  
  **instance** `Functor <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-base-functor-31205>`_ (`ClaimF <type-contingentclaims-internal-claim-claimf-65301_>`_ t x a o)
  
  **instance** `Foldable <https://docs.daml.com/daml/stdlib/DA-Foldable.html#class-da-foldable-foldable-25994>`_ (`ClaimF <type-contingentclaims-internal-claim-claimf-65301_>`_ t x a o)
  
  **instance** `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ (`ClaimF <type-contingentclaims-internal-claim-claimf-65301_>`_ t x a o)

.. _type-contingentclaims-internal-claim-inequality-69290:

**data** `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o

  A boolean predicate\. This is either ``time ≥ t | o(t, x) ≤ o'(t, x)``\.
  
  .. _constr-contingentclaims-internal-claim-timegte-50726:
  
  `TimeGte <constr-contingentclaims-internal-claim-timegte-50726_>`_ t
  
    ``True`` when ``time ≥ t``, ``False`` otherwise\.
  
  .. _constr-contingentclaims-internal-claim-lte-22988:
  
  `Lte <constr-contingentclaims-internal-claim-lte-22988_>`_ (:ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o, :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o)
  
    ``True`` when ``o(t, x) ≤ o'(t, x)``, ``False`` otherwise, for a pair of observations ``o``, ``o'``\.
  
  **instance** (`Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ t, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ x, `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ o) \=\> `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ (`Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o)
  
  **instance** (`Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ t, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ x, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ o) \=\> `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ (`Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o)

.. _type-contingentclaims-claim-f-80458:

**type** `F <type-contingentclaims-claim-f-80458_>`_
  \= `ClaimF <type-contingentclaims-internal-claim-claimf-65301_>`_

.. _type-contingentclaims-claim-t-19628:

**type** `T <type-contingentclaims-claim-t-19628_>`_
  \= `Claim <type-contingentclaims-internal-claim-claim-98456_>`_

Functions
---------

.. _function-contingentclaims-claim-zero-45639:

`zero <function-contingentclaims-claim-zero-45639_>`_
  \: `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
  
  Smart constructor for ``Zero``\.

.. _function-contingentclaims-claim-one-70978:

`one <function-contingentclaims-claim-one-70978_>`_
  \: a \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
  
  Smart constructor for ``One``\.

.. _function-contingentclaims-claim-give-32534:

`give <function-contingentclaims-claim-give-32534_>`_
  \: `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
  
  Smart constructor for ``Give``\.

.. _function-contingentclaims-claim-and-88537:

`and <function-contingentclaims-claim-and-88537_>`_
  \: `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
  
  Smart constructor for ``And``\. Because of the explicit representation of the
  first two arguments of an ``And``, it can be cumbersome to write ``And c c' []``\.
  With this constructor, you can write ``c \``and\` c'``instead. Flattens nested``And``s and applies additive monoid identity eagerly. Note this is an ``O(n)``operation. For a more efficient alternative, consider``mconcat\`\.

.. _function-contingentclaims-claim-or-1668:

`or <function-contingentclaims-claim-or-1668_>`_
  \: `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
  
  Smart constructor for ``Or``\. Because of the explicit representation of the
  first two arguments of an ``Or``, it can be cumbersome to write ``Or c c' []``\.
  With this constructor, you can write ``c \``or\` c'``instead. Flattens nested``Or``s. Unlike ``and``, this does not apply a monoid identity. Note this is an ``O(n)\` operation\.

.. _function-contingentclaims-claim-cond-4661:

`cond <function-contingentclaims-claim-cond-4661_>`_
  \: `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
  
  Smart constructor for ``Cond``\.

.. _function-contingentclaims-claim-scale-35958:

`scale <function-contingentclaims-claim-scale-35958_>`_
  \: :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
  
  Smart constructor for ``Scale``

.. _function-contingentclaims-claim-when-47997:

`when <function-contingentclaims-claim-when-47997_>`_
  \: `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
  
  Smart constructor for ``When``\.

.. _function-contingentclaims-claim-anytime-67619:

`anytime <function-contingentclaims-claim-anytime-67619_>`_
  \: `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
  
  Smart constructor for ``Anytime``\.

.. _function-contingentclaims-claim-until-57548:

`until <function-contingentclaims-claim-until-57548_>`_
  \: `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x a o
  
  Smart constructor for ``Until``\.

.. _function-contingentclaims-claim-mapparams-49812:

`mapParams <function-contingentclaims-claim-mapparams-49812_>`_
  \: (t \-\> i) \-\> (i \-\> t) \-\> (a \-\> a') \-\> (o \-\> o') \-\> (x \-\> x') \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ i x a o \-\> `Claim <type-contingentclaims-internal-claim-claim-98456_>`_ t x' a' o'
  
  Replace parameters in an ``Claim`` with actual values\.

.. _function-contingentclaims-claim-at-37248:

`at <function-contingentclaims-claim-at-37248_>`_
  \: t \-\> `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o
  
  Smart constructor for ``TimeGte``\.

.. _function-contingentclaims-claim-lteq-90994:

`(<=) <function-contingentclaims-claim-lteq-90994_>`_
  \: :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o \-\> :ref:`Observation <type-contingentclaims-observation-observation-36736>` t x o \-\> `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o
  
  Smart constructor for ``Lte``\. ``import Prelude hiding ((<=))`` in order to use this\.

.. _function-contingentclaims-claim-compare-37811:

`compare <function-contingentclaims-claim-compare-37811_>`_
  \: (`Ord <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-ord-6395>`_ t, `Ord <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-ord-6395>`_ x, `Number <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-number-53664>`_ x, `Divisible <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-num-divisible-86689>`_ x, `Action <https://docs.daml.com/daml/stdlib/Prelude.html#class-da-internal-prelude-action-68790>`_ m) \=\> (o \-\> t \-\> m x) \-\> `Inequality <type-contingentclaims-internal-claim-inequality-69290_>`_ t x o \-\> t \-\> m `Bool <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-bool-66265>`_
  
  Reify the ``Observable.Inequality`` into an observation function\.
