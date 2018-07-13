const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
} = require('react-app-rewire-typescript-babel-preset');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = {
  webpack(config, env) {
    config = rewireTypescript(config);

    config = rewireStyledComponents(config, env);
    config = rewireReactHotLoader(config, env);

    return config;
  },
  jest(config) {
    config = rewireTypescriptJest(config);

    return config;
  },
};
