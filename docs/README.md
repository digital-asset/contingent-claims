This folder contains detailed documentation of the library's functionality. Its target audience are sophisticated users of the library, as well as developers that wish to contribute to / extend it.

# Table of contents

- [Lifecycling](./Lifecycling.md)
- Valuation semantics (upcoming)

# Prerequisite knowledge

It is important that the reader is familiar with the papers [[1]](#1) and [[2]](#2), which introduce the model for a financial instrument that the library implements. Specifically, the primitives from [[2]](#2) are used in the definition of the `Claim` type.

The section on the contracts' valuation semantics uses results and notation from measure-theoretic probability theory and the theory of no-arbitrage pricing.

Finally, those who wish to develop the library would benefit from an understanding of recursion schemes, which are used to implement most of the workflows. Patrick Thomson's [blog post series](https://blog.sumtypeofway.com/posts/introduction-to-recursion-schemes.html) on the topic is an excellent resource to get up to speed on the topic.

# References

<a id="1">[1]</a>
Jones, S. Peyton, Jean-Marc Eber, and Julian Seward.
"Composing contracts: an adventure in financial engineering."
ACM SIG-PLAN Notices 35.9 (2000): 280-292.

<a id="2">[2]</a>
Jones, SL Peyton, and J. M. Eber.
"How to write a financial contract",
volume "Fun Of Programming" of "Cornerstones of Computing." (2005).
