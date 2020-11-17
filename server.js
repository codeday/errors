const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname.startsWith('/_next')) {
      handle(req, res, parsedUrl);
    } else {
      res.statusCode = 503;
      return app.renderError(null, req, res, '/_error', req.query);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('Ready on http://localhost:3000');
  });
});
