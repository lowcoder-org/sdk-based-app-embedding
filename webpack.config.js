const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "https://sdk.lowcoder.cloud/",
    filename: "bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 5, // Max number of parallel requests at an entry point.
    },
    minimize: true,
    minimizer: [new TerserPlugin({
      // Your customization if any
    })],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/*.html', to: 'dist', flatten: true },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
