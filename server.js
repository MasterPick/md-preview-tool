const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Markdown Preview Tool running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop.');
});