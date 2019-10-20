module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    'node',
    'promise',
    'unicorn',
    'jest',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'security',
    'graphql',
    '@typescript-eslint',
    'eslint-comments',
    'prettier',
  ],

  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
    serviceworker: true,
    worker: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'prettier/react',
  ],

  rules: {
    'no-use-before-define': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',

    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',

    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],

    'prettier/prettier': 'error',

    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unsupported-features/node-builtins': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-missing-import': [
      'error',
      {
        tryExtensions: ['.js', '.jsx', '.node', '.ts', '.tsx'],
      },
    ],

    'promise/valid-params': 'off',

    'fp/no-mutation': 'off',
    'fp/no-throw': 'off',
    'fp/no-nil': 'off',
    'fp/no-let': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-rest-parameters': 'off',
    'fp/no-class': 'off',
    'fp/no-this': 'off',
    'fp/no-mutating-methods': 'off',
    'fp/no-loops': 'off',

    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/camelcase': 'off',

    'import/no-mutable-exports': 'off',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],

      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-restricted-globals': 'off',
        'no-shadow': 'off',
        'prefer-destructuring': 'off',
        'no-multi-str': 'off',

        'react/prop-types': 'off',
        'react/sort-comp': 'off',
        'react/destructuring-assignment': 'off',

        'import/export': 'off',

        '@typescript-eslint/generic-type-naming': [
          'error',
          '^T[A-Z][a-zA-Z]+$',
        ],
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/prefer-interface': 'off',
      },
    },
  ],
};
