// module.exports = function(baseConfig, env, defaultConfig) {
//   defaultConfig.module.rules.push(
//     {
//       test: /\.stories\.js$/,
//       loaders: [require.resolve('@storybook/addon-storysource/loader')],
//       enforce: 'pre'
//     },
//     {
//       test: /\.less$/,
//       exclude: /node_modules/,
//       use: [
//         {
//           loader: 'style-loader'
//         },
//         {
//           loader: 'css-loader'
//         },
//         {
//           loader: 'less-loader',
//           options: {
//             strictMath: true,
//             noIeCompat: true
//           }
//         }
//       ]
//     }
//   )

//   return defaultConfig
// }

module.exports = ({ config, mode }) => {
  config.module.rules.push({
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
  })
  return config
}
