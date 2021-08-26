const path = require('path')
const devServer = require('./config/devServer')
const plugins = require('./config/plugins')
const rules = require('./config/rules')
const publicPath = 'http://localhost:3002/'
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer,
  output: {
    filename: 'cores.js', // TODO: será isso
    library: 'cores',
    path: path.resolve(__dirname, '../dist'),
    publicPath,
  },
  module: {
    rules
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins
};
