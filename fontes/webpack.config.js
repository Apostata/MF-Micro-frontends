
const path = require("path");
const plugins = require('./config/plugins')
const rules = require('./config/rules')
const devServer = require('./config/devServer')
const publicPath = 'http://localhost:3001/'
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath
  },
  module: {
    rules
  },
  plugins
};
