import { ProductModel } from "../product.model";
import { I_product } from "./product.interface";

// Create service for Product Data
const createProductIntoDB = async (productData: I_product) => {
  const result = await ProductModel.create(productData);
  return result;
};

export const productService = {
  createProductIntoDB,
};
