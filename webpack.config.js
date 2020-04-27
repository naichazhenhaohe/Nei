const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const HtmlwebpackPlugin = require('html-webpack-plugin')

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
      path: __dirname + '/dist',
      libraryTarget: 'umd'
    },
    externals: [
      function(context, request, callback) {
        if (/.js|.jpg|.png|.gif|.svg|.jpeg$/g.test(request)) {
          return callback()
        }
        callback(null, request)
      }
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: [path.resolve(__dirname, 'src')],
          loader: 'babel-loader'
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                strictMath: true,
                noIeCompat: true
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
      alias: {
        '@com': path.resolve(__dirname, 'src/components')
      }
    },
    devServer: {
      contentBase: path.join(__dirname, 'docs'),
      compress: true,
      port: 2333
    },
    plugins: [
      new HtmlwebpackPlugin({
        template: './public/index.html'
      })
    ]
  }
}
