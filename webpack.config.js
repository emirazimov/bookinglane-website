const { CleanWebpackPlugin } = require("clean-webpack-plugin") // installed via npm
// const HtmlWebpackPlugin = require("html-webpack-plugin") // installed via npm
// const webpack = require("webpack") // to access built-in plugins
// const path = require("path")

module.exports = {
  //   entry: "./path/to/my/entry/file.js",
  //   output: {
  //     /**
  //      * With zero configuration,
  //      *   clean-webpack-plugin will remove files inside the directory below
  //      */
  //     path: path.resolve(process.cwd(), "dist"),
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(js|jsx)$/,
  //         loader: "babel-loader",
  //       },
  //     ],
  //   },
  plugins: [new CleanWebpackPlugin()],
}
