const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  // if no error mapping
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8000,
    open: false,
    hot: true,
  },
  module: {
    // <--
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.(svg|png)$/, type: "asset/resource" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello world !",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
