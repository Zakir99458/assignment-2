import express from 'express';
import {ProductController} from './product.controller';

const router = express.Router();

//  http://localhost:5000/api/v1/products/create-product
console.log("I am in router now..")

router.post('/create-product', ProductController.createProduct);

export const ProductRoutes = router;