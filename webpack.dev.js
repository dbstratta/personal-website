const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const webpackCommonConfig = require('./webpack.common');

const fileLoaderConfig = {
  loader: 'file-loader',
  options: {
    name: 'static/media/[name].[hash:8].[ext]',
  },
};

const webpackDevConfig = merge(webpackCommonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',

  entry: ['react-hot-loader/patch', './src/index.ts'],
  output: {
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              poolTimeout: Infinity,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack', fileLoaderConfig],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: ['graphql-tag/loader'],
      },
      {
        test: /\.(png|jpg)$/,
        use: [fileLoaderConfig],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  devServer: {
    open: true,
    port: 4000,
    host: '0.0.0.0',
    hot: true,
    https: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    inline: true,
    overlay: {
      errors: true,
      warnings: false,
    },
    quiet: true,
    clientLogLevel: 'error',
    historyApiFallback: true,
  },
});

module.exports = webpackDevConfig;
