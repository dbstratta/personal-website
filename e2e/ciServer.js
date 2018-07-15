const http = require('http');

const port = 3000;

const ciServer = http.createServer((req, res) => {});

ciServer.listen(port, () => {
  console.log(`CI server is listening on port ${port}`);
});
