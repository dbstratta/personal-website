const args = process.env.CI ? ['--no-sandbox'] : [];

const server = {
  command: 'node e2e/e2eServer.js',
  port: process.env.E2E_SERVER_PORT || 3000,
};

module.exports = {
  launch: {
    ignoreHTTPSErrors: true,
    headless: process.env.PUPPETEER_HEADLESS,
    args,
  },
  server,
};
