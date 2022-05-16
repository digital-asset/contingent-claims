for f in docs/*.html 
  do pandoc -s --template da-style/da-pandoc.html --metadata pagetitle="Contingent Claims" -o $f $f 
done
