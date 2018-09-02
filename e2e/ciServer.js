const http = require('http2');

const port = 3000;

const ciServer = http.createServer((req, res) => {});

ciServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`CI server is listening on port ${port}`);
});
