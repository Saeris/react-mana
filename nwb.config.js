const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  type: 'react-component',
  polyfill: false,
  npm: {
    esModules: true
  },
  webpack: {
    html: {
      template: 'demo/public/index.html'
    },
    extra: {
      plugins: [new FaviconsWebpackPlugin('./demo/public/favicon.svg')]
    }
  }
}
