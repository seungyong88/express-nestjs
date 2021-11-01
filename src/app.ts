import * as express from "express";
import { Cat, CatType } from './Cats';

const app: express.Express = express();
const port: number = 4000;

const data = [1, 2, 3, 4];

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})