import express from 'express';
import routes from './routes';

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

export default new App().server;   