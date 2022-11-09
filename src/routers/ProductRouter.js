import { Router } from "express";

import { ProductDao } from "../Dao/index.js";

const productRouter = Router();

productRouter.get('/', async (req, res)=> {
    const products = await ProductDao.getAll();
    res.send({succes: true, data: products})
})

productRouter.get('/:id', async (req, res)=> {
    const {id} = req. params;
    const product = await ProductDao.getById(Number(id));

    if(!product){
        return res.send({succes: false, data: undefined, message:'Product not found',})
    }
    res.send({succes: true, data: product});
});

productRouter.post('/', async (req, res)=> {
    const {title, price, thumbnail} = req.body;
    const product = await ProductDao.save({title, price, thumbnail});
    res.send({succes: true, data: {id: product.id}})
});

productRouter.put('/:id', async (req, res)=> {
    const {id} = req.params;
    const {title, price, thumbnail} = req.body;

    const updateProduct = await ProductDao.updateById(id, {title, price, thumbnail});
    res.send({succes: true, data: {updated: updateProduct}});
})

export {productRouter};

