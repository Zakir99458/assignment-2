import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/product/product.route';

const app = express();
// const mongoose = require('mongoose');

// Parsers
app.use(express.json());
app.use(cors());

// http://localhost:3000/api/v1/products/create-product
app.use('api/v1/products', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

console.log(process.cwd());
export default app;
