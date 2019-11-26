const baseWebpackConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const merge = require('webpack-merge');


const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',

  output: {
    pathinfo: false,
  },

  devtool: '#@cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8081,
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'cache-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            }
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: false
    }),
  ],
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
})