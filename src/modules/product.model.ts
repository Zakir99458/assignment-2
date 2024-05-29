import { Schema, model } from "mongoose";
import { I_product } from "./product/product.interface";

// const variantSchema = new Schema<I_variant>({
//   variantType: { type: String },
//   variantValue: { type: String },
// });

// const inventorySchema = new Schema<I_inventory>({
//   quantity: { type: Number },
//   inStock: { type: Boolean },
// });

const productSchema = new Schema<I_product>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  // tags: [{
  //     type: String,
  //     enum: ['iPhone', 'Apple', 'Mobile'],
  //     message: '{VALUE} is not valid.'
  //   }],
  //     variants: { type: [variantSchema] }, // Array of variants
  //     inventory: { type: inventorySchema }, // Embedded inventory schema
});

export const ProductModel = model<I_product>("Product", productSchema);
