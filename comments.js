// Create web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/comments.html').pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});