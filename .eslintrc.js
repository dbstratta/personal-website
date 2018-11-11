module.exports = {
  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    'promise',
    'unicorn',
    'react',
    'import',
    'jsx-a11y',
    'jest',
    'typescript',
    'fp',
    'eslint-comments',
    'prettier',
  ],

  env: {
    es6: true,
    jest: true,
    browser: true,
  },

  globals: {
    page: true,
    browser: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'airbnb',
    'plugin:eslint-comments/recommended',
    'plugin:fp/recommended',
    'prettier',
    'prettier/react',
  ],

  rules: {
    'no-use-before-define': 'off',

    'unicorn/filename-case': 'off',

    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],

    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'prettier/prettier': 'error',

    'promise/valid-params': 'off',

    'fp/no-mutation': 'off',
    'fp/no-throw': 'off',
    'fp/no-nil': 'off',
    'fp/no-let': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-rest-parameters': 'off',
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
      parser: 'typescript-eslint-parser',

      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-restricted-globals': 'off',
        'prefer-destructuring': 'off',
        'no-multi-str': 'off',

        'react/prop-types': 'off',
        'react/sort-comp': 'off',
        'react/destructuring-assignment': 'off',

        'import/export': 'off',

        'typescript/no-unused-vars': 'error',
        'typescript/class-name-casing': 'error',
        'typescript/generic-type-naming': ['error', '^T[A-Z][a-zA-Z]+$'],
        'typescript/no-non-null-assertion': 'error',
      },
    },
  ],
};
