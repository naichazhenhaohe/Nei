const path = require('path')

module.exports = {
  addons: [
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.js?$/], //This is default
          include: [path.resolve(__dirname, '../stories')] // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false }
        }
      }
    }
  ]
}
