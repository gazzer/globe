var path = require('path')

const globalCSS = `
._v {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  flex-wrap: nowrap;
  align-items: stretch;
}

[name=rsg-code-editor],[data-testid=preview-wrapper]+div,footer{
  display:none!important
}`

module.exports = {
  title: 'Globe Styleguide',
  // assetsDir: path.resolve(__dirname, 'public'),
  styleguideDir: '../website/public/styleguide',
  pagePerSection: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  components: 'src/components/**/index.js',
  skipComponentsWithoutExample: true,
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.plugins[3].dangerouslyAllowCleanPatternsOutsideProject = true
    return webpackConfig
  },
  context: {
    Box: path.resolve(__dirname, 'src/components/box/index.js'),
    Button: path.resolve(__dirname, 'src/components/button/index.js'),
    TabNavItem: path.resolve(__dirname, 'src/components/tabNavItem/index.js'),
    NavItem: path.resolve(__dirname, 'src/components/navItem/index.js'),
    Row: path.resolve(__dirname, 'src/components/row/index.js'),
    Col: path.resolve(__dirname, 'src/components/col/index.js'),
    DebugGrid: path.resolve(__dirname, 'src/components/grid/DebugGrid.js'),
  },
  template: {
    head: {
      raw: `<style>${globalCSS}</style>`,
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/StoryWrapper.bs.js'),
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
      usageMode: 'hide',
    },
    {
      name: 'Documentation',
      sectionDepth: 1,
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Styling',
          content: 'docs/styling.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/components/**/index.js',
      sectionDepth: 1,
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },

        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
}
