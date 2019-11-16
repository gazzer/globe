var createGenerator = require('./generator/out/createGenerator').default
var replaceVariable = require('@elodin/plugin-replace-variable').default

var gazzerTheme = require('./src/themes/gazzer')

module.exports = {
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
    extractCSS: false,
    viewBaseClassName: '_v',
    textBaseClassName: '_t',
  }),
}
