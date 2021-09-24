const path = require("path");
const rules = require("./config/rules");
const plugins = require("./config/plugins");
const devServer = require("./config/devServer");
const publicPath = "http://localhost:3000/";
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer,
  output: {
    filename: "container.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath,
  },
  module: {
    rules,
  },
  plugins,
  devtool: "source-map",
};
