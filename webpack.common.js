const path = require('path');

const { EnvironmentPlugin } = require('webpack');
const { InjectManifest } = require('workbox-webpack-plugin');

const webpackConfig = {
  mode: 'none',
  target: 'web',

  plugins: [
    new EnvironmentPlugin(['NODE_ENV']),

    new InjectManifest({
      swSrc: path.join('src', 'serviceWorker', 'index.js'),
      swDest: 'service-worker.js',
    }),
  ],
};

module.exports = webpackConfig;
