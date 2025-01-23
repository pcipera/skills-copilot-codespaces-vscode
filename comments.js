// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// When you visit http://localhost:3000/, the comments.html file should be served.
// When you visit http://localhost:3000/favicon.ico, the web server should respond with a 404 status code.
// When you visit http://localhost:3000/anyotherpath, the web server should respond with a 404 status code.

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