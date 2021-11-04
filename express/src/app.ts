import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    /** logger middleware */
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is middleware")
      next();
    });

    //* json middleware
    this.app.use(express.json());

    this.setRoute();

    /** 404 middleware */
    this.app.use((req, res, next) => {
      console.log('this is error middleware');
      res.send({ error: '404 not found' })
      next();
    });
  }

  public listen() {
    const port: number = 4000;

    this.setMiddleware();
    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();