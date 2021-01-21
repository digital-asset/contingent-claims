# Contingent Claims

This is a library for modelling contingent claims i.e. derivatives. Briefly, a
derivative is represnted by a tree of `Claim`s, which describe the futures
cashflows between two (implicit) parties.

The implementation follows closely the papers [[1]], [[2]].

# License

Distributed under the BSD-2 License.

# Dependencies

# Building

You can build a release version (no tests in the `*.dar`) by running `daml
build` in the `src/main` directory, or a dev version that includes test from
`src/test`.

# References
<a id="1">[1]</a>
Jones, S. Peyton, Jean-Marc Eber, and Julian Seward.
"Composing contracts: an adventure in financial engineering."
ACM SIG-PLAN Notices 35.9 (2000): 280-292.
<a id="2">[2]</a>
Jones, SL Peyton, and J. M. Eber.
"How to write a financial contract",
volume "Fun Of Programming" of "Cornerstones of Computing." (2005).


