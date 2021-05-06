const express =require('express');
const parser = require('body-parser');
const BaseRoutes =  require('./routes');

const { json, urlencoded } = parser

class Middleware {
  static get configuration() {
    const app = express();
    app.use(json({
      limit: 1024 * 1024 * 30
    }));
    app.use(urlencoded({
      extended: true,
      limit: 1024 * 1024 * 30
    }));
    app.use('/api',new BaseRoutes().routes);
    return app;
  }
}

module.exports = Middleware;