const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function getFileCollection() {
  const globPath = './src/**/*.*(jsx|js)'
  const files = glob.sync(globPath)
  return files
}

function entryConfig() {
  let entryObj = {}
  getFileCollection().forEach(item => {
    const filePath = item.replace('./src', '')
    entryObj[filePath] = path.resolve(__dirname, item)
  })
  return entryObj
}

module.exports = function() {
  return {
    entry: entryConfig(),
    output: {
      filename: chunkData => {
        let filePath = chunkData.chunk.name
        const filename = filePath.replace('.jsx', '.js')
        return filename
      },
      path: __dirname + '/lib',
      libraryTarget: 'umd'
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
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
      extensions: ['.js', '.json', '.jsx'],
      alias: {
        '@com': path.resolve(__dirname, 'src/components')
      }
    },
    plugins: [
      new HtmlwebpackPlugin({
        template: './public/index.html'
      }),
      new CleanWebpackPlugin()
    ]
  }
}
