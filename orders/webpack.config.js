const path = require('path')
const devServer = require('./config/devServer')
const plugins = require('./config/plugins')
const rules = require('./config/rules')

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer,
  output: {
    publicPath: "auto",
  },
  module: {
    rules
  },
  plugins
};
