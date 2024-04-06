// Import the http module
const http = require('http');

// Create the server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
