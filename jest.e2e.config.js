module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['<rootDir>/e2e/**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist',
    '<rootDir>/src',
  ],
};
