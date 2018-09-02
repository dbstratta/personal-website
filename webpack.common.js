const { EnvironmentPlugin } = require('webpack');

const webpackConfig = {
  mode: 'none',
  target: 'web',

  plugins: [new EnvironmentPlugin(['NODE_ENV'])],
};

module.exports = webpackConfig;
