'use strict';

const http = require('http'), url = require('url');

const routes = {
  '/': (req, callback) => {
    callback({
      apiVersion: '1.0',
      resources: ['person', 'city'],
    });
  },

  '/person': (req, callback) => {
    callback({
      name: 'Alan',
      age: 32,
    });
  },

  '/city': (req, callback) => {
    callback({
      name: 'SPB',
      country: 'RF',
    });
  },
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let path = parsedUrl.pathname;
  if (path.endsWith('/') && path.length > 1) {
    path = path.slice(0, -1);
  }

  const handler = routes[path];
  if (!handler) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  handler(req, result => {
    const json = JSON.stringify(result);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(json);
  });
});

server.listen(3000, () => console.log('Listen in port 3000'));
