cd dist

git init
git add -A
git commit -m "deploy"

git push -f https://github.com/fheldtm/vue master:deploy