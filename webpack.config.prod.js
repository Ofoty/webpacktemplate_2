const baseWebpackConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',

  module: {
    rules: [
      {
        
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          MiniCssExtractPlugin.loader,
          'cache-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
    },
  }), new FaviconsWebpackPlugin({
    logo: './src/static/favicon.png',
    publicPath: '.',
    prefix: 'favicon/',
    outputPath: '/favicon',
  }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {

        },
        cache: true,
        parallel: true,
      }),
    ],
  },
})



module.exports = new Promise((resolve, reject) => {
  resolve(prodWebpackConfig);
});