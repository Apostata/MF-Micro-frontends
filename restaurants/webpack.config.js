
const path = require("path");
const plugins = require('./config/plugins')
const rules = require('./config/rules')
const devServer = require('./config/devServer')
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer,
  output: {
    path: path.resolve(__dirname,'../dist'),
    publicPath: "auto", //auto
  },
  module: {
    rules
  },
  plugins
};
