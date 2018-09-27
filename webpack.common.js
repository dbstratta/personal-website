const { DefinePlugin } = require('webpack');

const webpackConfig = {
  mode: 'none',
  target: 'web',

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        ENABLE_ANALYTICS: JSON.stringify(process.env.ENABLE_ANALYTICS),
        ENABLE_ERROR_TRACKING: JSON.stringify(
          process.env.ENABLE_ERROR_TRACKING,
        ),
      },
    }),
  ],
};

module.exports = webpackConfig;
