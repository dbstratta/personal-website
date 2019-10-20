module.exports = api => {
  const babelEnv = api.env();

  const sourceMaps = babelEnv === 'production' ? true : 'inline';

  return {
    presets: getPresets(babelEnv),
    plugins: getPlugins(babelEnv),
    ignore: getIgnoredPaths(babelEnv),
    sourceMaps,
  };
};

function getPresets(babelEnv) {
  const basePresets = [
    [
      '@babel/preset-env',
      {
        modules: babelEnv === 'test' ? 'commonjs' : false,
        debug: !!process.env.DEBUG_BABEL,
        useBuiltIns: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
    '@emotion/babel-preset-css-prop',
  ];

  return basePresets;
}

function getPlugins(babelEnv) {
  const basePlugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel',
  ];

  if (babelEnv === 'test') {
    return [...basePlugins, 'dynamic-import-node'];
  }

  return basePlugins;
}

function getIgnoredPaths(babelEnv) {
  const baseIgnorePaths = ['node_modules'];

  if (babelEnv === 'production') {
    return [...baseIgnorePaths, '**/*.spec.ts', '**/*.test.ts', '**/*.d.ts'];
  }

  return baseIgnorePaths;
}
