const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    main: path.resolve(__dirname, 'entry.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../public/dist'),
    publicPath: '/dist',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      amber: path.resolve(__dirname, '../../lib/amber/assets/js/amber.js'),
      HOCs: path.resolve(__dirname, '../../src/assets/javascripts/HOCs'),
      Features: path.resolve(
        __dirname,
        '../../src/assets/javascripts/features',
      ),
      clientConfig: path.resolve(
        __dirname,
        '../../src/assets/javascripts/config',
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=/images/[name].[ext]'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=/[name].[ext]'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
  ],
  // For more info about webpack logs see: https://webpack.js.org/configuration/stats/
  stats: 'errors-only',
};

module.exports = config;
