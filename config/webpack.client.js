const path = require("node:path");
module.exports = {
  target: "web",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: path.resolve(__dirname, "../src/client.js"),
  output: {
    filename: "bundle_client.js",
    path: path.resolve(__dirname, "../dist/public"),
  },
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
