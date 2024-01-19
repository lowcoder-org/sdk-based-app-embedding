const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.jsx', 
  },
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
    filename: 'bundle.js',
    chunkFilename: '[name].[contenthash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      // Your customization if any
    })],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: 'src/*.html', // Path to source files
          to: '[name][ext]', // Pattern for the output, '[name][ext]' will keep the original file name and extension
        },
        {
          from: 'src/index_custom_component_files', // Path to your folder
          to: 'index_custom_component_files/', // Destination path in the dist folder
        },
        {
          from: 'src/netlify.toml', // Path to your netlify.toml file
          to: 'netlify.toml', // Destination filename in the dist folder
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
