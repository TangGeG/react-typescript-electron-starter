const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    port: 3000,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    hot: true,
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
  },
})
