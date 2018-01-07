'use strict';

const express = require('express');
const noCache = require('./middlewares/noCache');
const api = require('./middlewares/api');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(`${__dirname}/../public`));
app.use(noCache);
app.use(api);

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

const server = require('http').createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
