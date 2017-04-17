# patricklewis

> Portfolio site built with vue.js

## Github hosting

Build the app to a 'docs' directory on the root level. In the gh repo under settings, change the Github Pages source to the 'docs' branch.

[https://mountaindrawn.com/patricklewis/](https://mountaindrawn.com/patricklewis/)

## Changes to webpack

Using the the vue-cli webpack option in this project

index.js change:

```
index: path.resolve(__dirname, '../docs/index.html')
assetsRoot: path.resolve(__dirname, '../docs')
assetsPublicPath: ''
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
