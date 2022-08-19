.. Copyright (c) 2022 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
.. SPDX-License-Identifier: Apache-2.0

.. _module-contingentclaims-math-stochastic-42476:

Module ContingentClaims.Math.Stochastic
=======================================

Typeclasses
-----------

.. _class-contingentclaims-math-stochastic-isidentifier-26934:

**class** `IsIdentifier <class-contingentclaims-math-stochastic-isidentifier-26934_>`_ t **where**

  .. _function-contingentclaims-math-stochastic-localvar-63030:
  
  `localVar <function-contingentclaims-math-stochastic-localvar-63030_>`_
    \: `Int <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-int-37261>`_ \-\> t
    
    Produce a local identifier of type ``t``, subindexed by ``i``

Data Types
----------

.. _type-contingentclaims-math-stochastic-expr-86999:

**data** `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t

  Represents an expression of t\-adapted stochastic processes
  
  .. _constr-contingentclaims-math-stochastic-const-31833:
  
  `Const <constr-contingentclaims-math-stochastic-const-31833_>`_ `Decimal <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-decimal-18135>`_
  
  
  .. _constr-contingentclaims-math-stochastic-ident-96258:
  
  `Ident <constr-contingentclaims-math-stochastic-ident-96258_>`_ t
  
  
  .. _constr-contingentclaims-math-stochastic-proc-29829:
  
  `Proc <constr-contingentclaims-math-stochastic-proc-29829_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - name
         - `Text <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-text-51952>`_
         - 
       * - process
         - `Process <type-contingentclaims-math-stochastic-process-71340_>`_ t
         - 
       * - filtration
         - t
         - 
  
  .. _constr-contingentclaims-math-stochastic-sup-22466:
  
  `Sup <constr-contingentclaims-math-stochastic-sup-22466_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - lowerBound
         - t
         - 
       * - tau
         - t
         - 
       * - rv
         - `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t
         - 
  
  .. _constr-contingentclaims-math-stochastic-sum-59559:
  
  `Sum <constr-contingentclaims-math-stochastic-sum-59559_>`_ \[`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t\]
  
  
  .. _constr-contingentclaims-math-stochastic-neg-17368:
  
  `Neg <constr-contingentclaims-math-stochastic-neg-17368_>`_ (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t)
  
  
  .. _constr-contingentclaims-math-stochastic-mul-80664:
  
  `Mul <constr-contingentclaims-math-stochastic-mul-80664_>`_ (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t, `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t)
  
  
  .. _constr-contingentclaims-math-stochastic-pow-33356:
  
  `Pow <constr-contingentclaims-math-stochastic-pow-33356_>`_ (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t, `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t)
  
  
  .. _constr-contingentclaims-math-stochastic-i-87109:
  
  `I <constr-contingentclaims-math-stochastic-i-87109_>`_ (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t, `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t)
  
  
  .. _constr-contingentclaims-math-stochastic-e-39249:
  
  `E <constr-contingentclaims-math-stochastic-e-39249_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - rv
         - `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t
         - 
       * - filtration
         - t
         - 
  
  **instance** ToXml t \=\> ToXml (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t)
  
  **instance** Corecursive (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t) (`ExprF <type-contingentclaims-math-stochastic-exprf-90472_>`_ t)
  
  **instance** Recursive (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t) (`ExprF <type-contingentclaims-math-stochastic-exprf-90472_>`_ t)
  
  **instance** `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ t \=\> `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t)
  
  **instance** `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ t \=\> `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t)

.. _type-contingentclaims-math-stochastic-exprf-90472:

**data** `ExprF <type-contingentclaims-math-stochastic-exprf-90472_>`_ t x

  Base functor for ``Expr``\. Note that this is ADT is re\-used in a couple of
  places e\.g\. ``Process``, where however not every choice is legal and will lead to
  a partial evaluator\.
  
  .. _constr-contingentclaims-math-stochastic-constf-39090:
  
  `ConstF <constr-contingentclaims-math-stochastic-constf-39090_>`_ `Decimal <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-decimal-18135>`_
  
  
  .. _constr-contingentclaims-math-stochastic-identf-5163:
  
  `IdentF <constr-contingentclaims-math-stochastic-identf-5163_>`_ t
  
  
  .. _constr-contingentclaims-math-stochastic-procf-79694:
  
  `ProcF <constr-contingentclaims-math-stochastic-procf-79694_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - name
         - `Text <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-text-51952>`_
         - 
       * - process
         - `Process <type-contingentclaims-math-stochastic-process-71340_>`_ t
         - 
       * - filtration
         - t
         - 
  
  .. _constr-contingentclaims-math-stochastic-supf-54295:
  
  `SupF <constr-contingentclaims-math-stochastic-supf-54295_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - lowerBound
         - t
         - 
       * - tau
         - t
         - 
       * - rv
         - x
         - 
  
  .. _constr-contingentclaims-math-stochastic-sumf-95300:
  
  `SumF <constr-contingentclaims-math-stochastic-sumf-95300_>`_ \[x\]
  
  
  .. _constr-contingentclaims-math-stochastic-negf-42569:
  
  `NegF <constr-contingentclaims-math-stochastic-negf-42569_>`_ x
  
  
  .. _constr-contingentclaims-math-stochastic-mulf-67113:
  
  `MulF <constr-contingentclaims-math-stochastic-mulf-67113_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - lhs
         - x
         - 
       * - rhs
         - x
         - 
  
  .. _constr-contingentclaims-math-stochastic-powf-35157:
  
  `PowF <constr-contingentclaims-math-stochastic-powf-35157_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - lhs
         - x
         - 
       * - rhs
         - x
         - 
  
  .. _constr-contingentclaims-math-stochastic-if-34700:
  
  `I_F <constr-contingentclaims-math-stochastic-if-34700_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - lhs
         - x
         - 
       * - rhs
         - x
         - 
  
  .. _constr-contingentclaims-math-stochastic-ef-72440:
  
  `E_F <constr-contingentclaims-math-stochastic-ef-72440_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - rv
         - x
         - 
       * - filtration
         - t
         - 
  
  **instance** Corecursive (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t) (`ExprF <type-contingentclaims-math-stochastic-exprf-90472_>`_ t)
  
  **instance** Recursive (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t) (`ExprF <type-contingentclaims-math-stochastic-exprf-90472_>`_ t)
  
  **instance** `Functor <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-base-functor-31205>`_ (`ExprF <type-contingentclaims-math-stochastic-exprf-90472_>`_ t)
  
  **instance** `Foldable <https://docs.daml.com/daml/stdlib/DA-Foldable.html#class-da-foldable-foldable-25994>`_ (`ExprF <type-contingentclaims-math-stochastic-exprf-90472_>`_ t)
  
  **instance** `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ (`ExprF <type-contingentclaims-math-stochastic-exprf-90472_>`_ t)

.. _type-contingentclaims-math-stochastic-process-71340:

**data** `Process <type-contingentclaims-math-stochastic-process-71340_>`_ t

  A stochastic processes\. Currently this represents GBM \- eventually we
  wish to support other processes such as Levy\.
  
  .. _constr-contingentclaims-math-stochastic-process-8965:
  
  `Process <constr-contingentclaims-math-stochastic-process-8965_>`_
  
    .. list-table::
       :widths: 15 10 30
       :header-rows: 1
    
       * - Field
         - Type
         - Description
       * - dt
         - `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t
         - 
       * - dW
         - `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t
         - 
  
  **instance** `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ t \=\> `Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ (`Process <type-contingentclaims-math-stochastic-process-71340_>`_ t)
  
  **instance** `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ t \=\> `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ (`Process <type-contingentclaims-math-stochastic-process-71340_>`_ t)

Functions
---------

.. _function-contingentclaims-math-stochastic-riskless-33828:

`riskless <function-contingentclaims-math-stochastic-riskless-33828_>`_
  \: t \-\> `Process <type-contingentclaims-math-stochastic-process-71340_>`_ t
  
  Helper function to create a riskless process ``dS = r dt``

.. _function-contingentclaims-math-stochastic-gbm-1263:

`gbm <function-contingentclaims-math-stochastic-gbm-1263_>`_
  \: t \-\> t \-\> `Process <type-contingentclaims-math-stochastic-process-71340_>`_ t
  
  Helper function to create a geometric BM ``dS = μ dt + σ dW``

.. _function-contingentclaims-math-stochastic-fapf-3375:

`fapf <function-contingentclaims-math-stochastic-fapf-3375_>`_
  \: (`Eq <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-classes-eq-22713>`_ a, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ a, `Show <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-show-show-65360>`_ o, `IsIdentifier <class-contingentclaims-math-stochastic-isidentifier-26934_>`_ t) \=\> a \-\> (a \-\> `Process <type-contingentclaims-math-stochastic-process-71340_>`_ t) \-\> (a \-\> a \-\> `Process <type-contingentclaims-math-stochastic-process-71340_>`_ t) \-\> (o \-\> `Process <type-contingentclaims-math-stochastic-process-71340_>`_ t) \-\> t \-\> :ref:`Claim <type-contingentclaims-internal-claim-claim-98456>` t `Decimal <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-decimal-18135>`_ a o \-\> `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t
  
  Converts a ``Claim`` into the Fundamental Asset Pricing Formula\. The ϵ
  expressions are defined as E1\-E10 in the Eber/Peyton\-Jones paper\. If you
  squint you can almost see they correspond one\-to\-one to the formulae in our
  whitepaper\.

.. _function-contingentclaims-math-stochastic-simplify-99927:

`simplify <function-contingentclaims-math-stochastic-simplify-99927_>`_
  \: `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t \-\> `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t
  
  This is meant to be a function that algebraically simplifies the FAPF by
  
  1. using simple identities and ring laws
  2. change of numeraire technique\.

.. _function-contingentclaims-math-stochastic-unitidentity-12430:

`unitIdentity <function-contingentclaims-math-stochastic-unitidentity-12430_>`_
  \: `ExprF <type-contingentclaims-math-stochastic-exprf-90472_>`_ t (`Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t) \-\> `Expr <type-contingentclaims-math-stochastic-expr-86999_>`_ t
