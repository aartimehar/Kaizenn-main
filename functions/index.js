const functions = require('firebase-functions');
const next = require('next');

const dev = false;
const app = next({ dev, conf: { distDir: 'next' } }); // use the distDir you set in next.config.js
const handle = app.getRequestHandler();

exports.nextServer = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
