const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
      }),
      new CopyWebpackPlugin([
        { from: 'src/static/', to: '', ignore: ['*favicon*.*'],},
        { from: 'src/assets/img/**/*sprite*.svg', to: 'img',},
      ]),
    ],
  output: {
    filename: 'js/[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            'cache-loader',
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]',
                context: 'src/assets/img',
                outputPath: 'img',
              }
            }
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'cache-loader',
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]',
                context: 'src/assets/fonts',
                outputPath: 'fonts',
              }
            }
          ],
        },
      ],
    },
};