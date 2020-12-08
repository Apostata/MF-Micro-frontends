const rules = require('./config/rules')
const plugins = require('./config/plugins')
const devServer = require('./config/devServer')

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
