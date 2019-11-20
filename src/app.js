const express = require('express');
const routes = require('./routes');

class App {
  // método construtor é chamado automaticamente toda vez que está classe for chamada
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server;   