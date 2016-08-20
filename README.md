# vue-template-compiler-loader

`npm i vue-template-compiler-loader --save-dev`

Webpack loader to pre-compile Vue 2.0 templates.

### Webpack config
To `module.loaders` add:

`{ test: /\.html$/, loader: 'vue-template-compiler' }`


### Usage

`import template from './template.html'`

`template` will be an object

```
{
  render: Function,
  staticRenderFns: Array<Function>
}
```
