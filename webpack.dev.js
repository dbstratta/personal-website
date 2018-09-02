const path = require('path');
const fs = require('fs');

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

const webpackCommonConfig = require('./webpack.common');

const keyPath = path.join(__dirname, 'keys', 'localhost-key.pem');
const certPath = path.join(__dirname, 'keys', 'localhost.pem');

const webpackDevConfig = merge(webpackCommonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',

  entry: {
    main: './src/index.tsx',
  },

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
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  serve: {
    open: true,
    host: '0.0.0.0',
    port: 4000,
    content: path.resolve(__dirname, 'public'),
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    },
    devMiddleware: {
      publicPath: '/',
      logLevel: 'silent',
    },
    hotClient: {
      logLevel: 'silent',
      port: 4001,
      host: {
        server: '0.0.0.0',
        client: 'localhost',
      },
      https: true,
    },
    add(app) {
      app.use(convert(history()));
    },
  },
});

module.exports = webpackDevConfig;
