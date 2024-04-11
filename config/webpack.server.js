const path = require("node:path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  target: "node",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: path.resolve(__dirname, "../src/server.js"),
  output: {
    filename: "bundle_server.js",
    path: path.resolve(__dirname, "../dist"),
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
