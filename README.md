# vue-template-compiler-loader

Webpack loader to pre-compile Vue 2.0 templates.

`npm i vue-template-compiler-loader --save-dev`

### Webpack config
To `module.loaders` add:

`{ test: /\.html$/, loader: 'vue-template-compiler' }`


### Usage

`import template from './template.html'`

`template` will be an object

```javascript
{
  render: Function,
  staticRenderFns: Array<Function>
}
```

Set `render` and `staticRenderFns` properties on a component e.g:

```javascript
// manually
import template from './template.html'

export const myComponent = {
  name: 'myComponent',
  render: template.render,
  staticRenderFns: template.staticRenderFns,
  mounted () {}
}



// mixin
import template from './template.html'

export const myComponent = {
  name: 'myComponent',
  mixins: [template],
  mounted () {}
}



// stage2 object spread
import template from './template.html'

export const myComponent = {
  name: 'myComponent',
  ...template,
  mounted () {}
}
```
