const compiler = require('vue-template-compiler');

module.exports = function (content) {
  const compiled = compiler.compile(content);

  if (compiled.errors.length > 0) {
    throw compiled.errors;
  }

  return `
    module.exports = {
      render: ${toFunction(compiled.render)},
      staticRenderFns: [${compiled.staticRenderFns.map(toFunction).join(',')}]
    };
  `;
}

function toFunction (code) {
  return `function(){${code}}`
}
