module.exports = {
  hooks: {
    'commit-msg': 'commitlint --env HUSKY_GIT_PARAMS',
    'pre-commit': 'yarn check --integrity && yarn tsc && lint-staged',
  },
};
