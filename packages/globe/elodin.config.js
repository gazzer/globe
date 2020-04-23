var createGenerator = require('@elodin/generator-reason').createGenerator
var replaceVariable = require('@elodin/plugin-replace-variable').default

var gazzerTheme = require('./src/themes/gazzer')

module.exports = {
  sources: ['src'],
  plugins: [
    replaceVariable({
      variables: { theme: gazzerTheme },
      selector: (vars, prop) =>
        prop
          .split('_')
          .reduce((out, sub) => (out ? out[sub] : undefined), vars),
    }),
  ],
  generator: createGenerator({
    devMode: process.env.NODE_ENV !== 'production',
    viewBaseClassName: '_v',
    textBaseClassName: '_t',
  }),
}
