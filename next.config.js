var webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var withCSS = require('@zeit/next-css')
var withTM = require('next-transpile-modules')
var bsconfig = require('./bsconfig.json')
var withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  experimental: {
    granularChunks: true,
  },
  serverless: true,
  pageExtensions: ['js', 'bs.js'],
  transpileModules: ['bs-platform', 'wonka'].concat(
    bsconfig['bs-dependencies']
  ),
}

module.exports = withBundleAnalyzer(
  withCSS(
    withTM({
      ...config,

      webpack(config, options) {
        if (config.mode === 'production') {
          if (Array.isArray(config.optimization.minimizer)) {
            config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
          }
        }

        // remove moment locales
        config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
        return config
      },
    })
  )
)
