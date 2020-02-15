const webpack = require('webpack')
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function() {
  return {
    entry: ['./src/index.js'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'static/js/bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: [path.resolve(__dirname, 'src')],
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    },
    plugins: [
      new HtmlwebpackPlugin({
        template: './public/index.html'
      })
    ]
  }
}
