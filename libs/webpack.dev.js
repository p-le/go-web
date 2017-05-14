const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    app: './assets/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      hammer: 'hammerjs/hammer'
    }
  },
  plugins: [
      new ExtractTextPlugin("../public/app.bundle.css"),
      new webpack.ProvidePlugin({
        $: 'jquery',
        Hammer: 'hammer'
      })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: [ /node_modules/ ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ]
        })
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          { 
            loader: 'file-loader',
            options: {
              name: '../public/fonts/[name].[ext]',
            }
          }
        ]
      },
    ]
  }
};