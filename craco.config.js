const path = require('path');

module.exports = {
  webpack: {
    entry: ['react-hot-loader/patch', './src'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
}
