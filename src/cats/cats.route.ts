import { Cat, CatType } from './cats.model';
import { Router } from 'express';

const router = Router();

// GET 전체 리턴
router.get('/cats', (req, res) => {
    try {
        res.status(200).send({
            success: true,
            data: {
                Cat,
            }
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error
        })
    }
})

// GET 특정 ID 리턴
router.get('/cats/:id', (req, res) => {
    const { id } = req.params;

    console.log("id", id);
    try {
        const cats = Cat.find(cat => cat.id === id);
        // throw new Error('db connect error')
        res.status(200).send({
            success: true,
            data: {
                cats,
            }
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error
        })
    }
})

// 고양이 추가하기
router.post('/cats', (req, res) => {
    try {
        const data = req.body;
        Cat.push(data);

        res.status(200).send({
            success: true,
            data: {
                Cat,
            }
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error
        })
    }
})

export default router;