/**
 * Markdown Preview Tool - HTTP Server
 * Node.js 原生 http 模块，零外部依赖
 */
const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

/**
 * 根据请求路径返回对应文件内容
 * @param {string} urlPath - 请求路径
 * @returns {{content: string, contentType: string}|null}
 */
function resolveFile(urlPath) {
  const routes = {
    '/':          { file: 'public/index.html',    type: 'text/html; charset=utf-8' },
    '/index.html':{ file: 'public/index.html',    type: 'text/html; charset=utf-8' },
  };
  const route = routes[urlPath];
  if (!route) return null;
  try {
    const content = fs.readFileSync(path.join(__dirname, route.file), 'utf-8');
    return { content, contentType: route.type };
  } catch {
    return null;
  }
}

const server = http.createServer((req, res) => {
  const result = resolveFile(req.url);
  if (result) {
    res.writeHead(200, { 'Content-Type': result.contentType });
    res.end(result.content);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Markdown Preview Tool v2.0 running at http://localhost:${PORT}`);
  console.log('  - Press Ctrl+C to stop.');
});