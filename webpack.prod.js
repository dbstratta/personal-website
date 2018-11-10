const path = require('path');

const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpackCommonConfig = require('./webpack.common');

const distFolderName = 'dist';

const webpackProdConfig = merge(webpackCommonConfig, {
  mode: 'production',
  devtool: 'source-map',
  bail: true,

  entry: {
    main: './src/index.tsx',
  },

  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
    path: path.resolve(__dirname, distFolderName),
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
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
    new CleanWebpackPlugin([distFolderName]),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new CopyWebpackPlugin([
      {
        from: 'public/*',
        flatten: true,
        ignore: ['index.html'],
      },
    ]),
    new GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/(.*)/,
          handler: 'cacheFirst',
        },
      ],
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ENABLE_ANALYTICS': process.env.ENABLE_ANALYTICS === 'true',
      'process.env.ENABLE_ERROR_TRACKING':
        process.env.ENABLE_ERROR_TRACKING === 'true',
      'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
    }),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          ecma: 8,
        },
      }),
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
});

module.exports = webpackProdConfig;
