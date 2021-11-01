import * as express from "express";
import { Cat, CatType } from './Cats';

const app: express.Express = express();
const port: number = 4000;

const data = [1, 2, 3, 4];

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware")
  next();
});

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware22")
  next();
});


app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat }) // 캣정보 내려보내주기
})

app.get('/cats/blue', (req, res, next: express.NextFunction) => {
  console.log(req.rawHeaders[1]);
  res.send({ blue: Cat[0] });
})

app.get('/cats/som', (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ som: Cat[1] });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})