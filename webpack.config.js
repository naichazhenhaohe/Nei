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
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: false,
            compact: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            cacheDirectory: true,
            cacheCompression: false
          }
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
