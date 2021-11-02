import { Request, Response } from "express";
import { Cat, CatType } from './cats.model';

//* READ 고양이 전체 데이터 다 조회 -> GET
export const readAllcat = (req: Request, res: Response) => {
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
}

export const readCat = (req: Request, res: Response) => {
  const { id } = req.params;

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
}

export const createCat = (req: Request, res: Response) => {
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
}

export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
        cats: Cat
      }
    })

  } catch (error) {
    res.status(400).send({
      success: false,
      error: error
    })
  }
}

export const updatePartCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
        cats: Cat
      }
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error
    })
  }
}

export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
        cats: Cat
      }
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error
    })
  }
}