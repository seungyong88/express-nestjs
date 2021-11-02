import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();
const port: number = 4000;

const data = [1, 2, 3, 4];

/** logger middleware */
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware")
  next();
});

//* json middleware

app.use(express.json());
app.use(catsRouter);

// //READ 고양이 전체 데이터 조회하기
// app.get('/', (req: express.Request, res: express.Response) => {
//   res.send({ cats: Cat }) // 캣정보 내려보내주기
// })

/** 404 middleware */
app.use((req, res, next) => {
  console.log('this is error middleware');
  res.send({ error: '404 not found' })
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})