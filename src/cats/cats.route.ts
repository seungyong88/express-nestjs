import { Cat, CatType } from './cats.model';
import { Router } from 'express';
import { 
  readAllcat, 
  readCat, 
  createCat,
  updateCat,
  updatePartCat,
  deleteCat
} from "./cats.service";

const router = Router();

router.get('/cats', readAllcat); // GET 전체 리턴
router.get('/cats/:id', readCat); // GET 특정 ID 리턴
router.post('/cats', createCat); // 고양이 추가하기
router.put('/cats/:id', updateCat); // 고양이 put
router.patch('/cats/:id', updatePartCat); // 고양이 patch
router.delete('/cats/:id', deleteCat); // 고양이 삭제 

export default router;