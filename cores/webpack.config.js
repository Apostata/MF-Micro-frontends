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
    publicPath
  },
  module: {
    rules
  },
  plugins
};
