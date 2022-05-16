# Script assumes that (unformatted) html doc has been generated in the docs/ directory, and has not been comitted to git.

# The following will force exit if any command on a line fails. This is to avoid accidently comitting if things go wrong
set -o errexit

HEAD=$(git rev-parse --short HEAD)

git switch github-pages
# This is a bit weird as we're using the same input/output. This takes the damlc generated HTML and adds headers/styling to it.
for f in docs/*.html 
  do pandoc -s --template docs/da-style/da-pandoc.html --metadata pagetitle="Contingent Claims" -o $f $f 
done
git add docs
git commit -m "Autogenerated doc for $HEAD"
# git push
