.. Copyright (c) 2022 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
.. SPDX-License-Identifier: Apache-2.0

.. _module-contingentclaims-util-recursion-69782:

Module ContingentClaims.Util.Recursion
======================================

Functions
---------

.. _function-contingentclaims-util-recursion-catam-15501:

`cataM <function-contingentclaims-util-recursion-catam-15501_>`_
  \: (Monad m, `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ f, Recursive b f) \=\> (f a \-\> m a) \-\> b \-\> m a

.. _function-contingentclaims-util-recursion-param-58584:

`paraM <function-contingentclaims-util-recursion-param-58584_>`_
  \: (Monad m, `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ f, Recursive b f) \=\> (f (b, a) \-\> m a) \-\> b \-\> m a

.. _function-contingentclaims-util-recursion-anam-423:

`anaM <function-contingentclaims-util-recursion-anam-423_>`_
  \: (Monad m, `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ f, Corecursive b f) \=\> (a \-\> m (f a)) \-\> a \-\> m b

.. _function-contingentclaims-util-recursion-apom-23511:

`apoM <function-contingentclaims-util-recursion-apom-23511_>`_
  \: (Monad m, `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ f, Corecursive b f) \=\> (a \-\> m (f (`Either <https://docs.daml.com/daml/stdlib/Prelude.html#type-da-types-either-56020>`_ b a))) \-\> a \-\> m b

.. _function-contingentclaims-util-recursion-futum-88292:

`futuM <function-contingentclaims-util-recursion-futum-88292_>`_
  \: (Monad m, `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ f, Corecursive b f) \=\> (a \-\> m (f (Free f a))) \-\> a \-\> m b

.. _function-contingentclaims-util-recursion-apocatam-67500:

`apoCataM <function-contingentclaims-util-recursion-apocatam-67500_>`_
  \: (Monad m, `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ f, Corecursive b f) \=\> (f b \-\> b) \-\> (a \-\> m (f (`Either <https://docs.daml.com/daml/stdlib/Prelude.html#type-da-types-either-56020>`_ b a))) \-\> a \-\> m b
  
  Specialised lazy re\-fold, used by ``lifecycle``\.

.. _function-contingentclaims-util-recursion-hylom-81928:

`hyloM <function-contingentclaims-util-recursion-hylom-81928_>`_
  \: (`Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ f, Monad n) \=\> (f b \-\> b) \-\> (a \-\> n (f a)) \-\> a \-\> n b

.. _function-contingentclaims-util-recursion-ghylom-98532:

`ghyloM <function-contingentclaims-util-recursion-ghylom-98532_>`_
  \: (Comonad w, `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ f, Monad m, `Traversable <https://docs.daml.com/daml/stdlib/DA-Traversable.html#class-da-traversable-traversable-18144>`_ m, Monad n) \=\> (f (w c) \-\> w (f c)) \-\> (m (f d) \-\> f (m d)) \-\> (f (w b) \-\> b) \-\> (a \-\> n (f (m a))) \-\> a \-\> n b

.. _function-contingentclaims-util-recursion-funzip-22750:

`funzip <function-contingentclaims-util-recursion-funzip-22750_>`_
  \: `Functor <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-base-functor-31205>`_ f \=\> f (a, b) \-\> (f a, f b)

.. _function-contingentclaims-util-recursion-synthesize-75610:

`synthesize <function-contingentclaims-util-recursion-synthesize-75610_>`_
  \: (`Functor <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-base-functor-31205>`_ f, Recursive b f) \=\> (f attr \-\> attr) \-\> b \-\> Cofree f attr

.. _function-contingentclaims-util-recursion-inherit-24208:

`inherit <function-contingentclaims-util-recursion-inherit-24208_>`_
  \: (`Functor <https://docs.daml.com/daml/stdlib/Prelude.html#class-ghc-base-functor-31205>`_ f, Corecursive b f, Recursive b f) \=\> (b \-\> attr \-\> attr) \-\> attr \-\> b \-\> Cofree f attr

.. _function-contingentclaims-util-recursion-subtreesizetick-26744:

`subTreeSize' <function-contingentclaims-util-recursion-subtreesizetick-26744_>`_
  \: `Foldable <https://docs.daml.com/daml/stdlib/DA-Foldable.html#class-da-foldable-foldable-25994>`_ f \=\> f `Int <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-int-37261>`_ \-\> `Int <https://docs.daml.com/daml/stdlib/Prelude.html#type-ghc-types-int-37261>`_
