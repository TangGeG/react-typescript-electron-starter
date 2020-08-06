const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 6,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          output: {
            ecma: 6,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: false,
      }),
    ],
  },
})
