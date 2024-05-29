import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/product.route";

const app = express();
app.use(express.json());
app.use(cors());

// http://localhost:5000/api/v1/products/create-product
app.use("/api/v1/products", ProductRoutes);

console.log(process.cwd());
export default app;
