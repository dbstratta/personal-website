const https = require('https');
const path = require('path');
const fs = require('fs');

const express = require('express');
const history = require('connect-history-api-fallback');

const port = process.env.E2E_SERVER_PORT || 3000;

const keyAndCertFolderPath = path.resolve(__dirname, '../keys');
const keyPath = path.join(keyAndCertFolderPath, 'localhost-key.pem');
const certPath = path.join(keyAndCertFolderPath, 'localhost.pem');

const key = fs.readFileSync(keyPath);
const cert = fs.readFileSync(certPath);

const e2eServerOptions = {
  key,
  cert,
};

const expressApp = express();

const distFolderPath = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distFolderPath, 'index.html');

const staticFileMiddleware = express.static(distFolderPath);

expressApp.use(staticFileMiddleware);
expressApp.use(
  history({
    verbose: true,
    index: indexHtmlPath,
    disableDotRule: true,
  }),
);
expressApp.use(staticFileMiddleware);

const e2eServer = https.createServer(e2eServerOptions, expressApp);

e2eServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 server for e2e tests ready at https://localhost:${port}`);
});
