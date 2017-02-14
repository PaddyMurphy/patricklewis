# Basic build system for prototyping

npm install and start working. Read the package.json for more info. Based on the [npm-build-boilerplate](https://github.com/damonbauer/npm-build-boilerplate)</a>

## Provides:

- node-sass (sass support)
- autoprefixer (write css without prefixes)
- eslint (checks js errors)
- eslint plugins to enable sublimetext highlighting)
- browser-sync (localhost watches for changes to css & js)
- imagemin (comress all images & svgs)
- uglifyjs (concats and compresses everything in /js)

To seamlessly deploy both master and gh-pages branch with 'git push'. Add this to your .git config [remote "origin"]

```
push = +refs/heads/master:refs/heads/gh-pages
push = +refs/heads/master:refs/heads/master
```
