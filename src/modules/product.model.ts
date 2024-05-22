import { Schema, model } from 'mongoose';
import {
    I_variant,
    I_inventory,
    I_product,
    ProductInterface,
} from './product/product.interfac';

const variantSchema = new Schema<I_variant>({
    variantType: {type: String},
    variantValue: {type: String},
});

const inventorySchema = new Schema<I_inventory>({
    quantity: {type: Number},
    inStock: {type: Boolean},
});

const productSchema = new Schema<I_product, ProductInterface>({
    id: {type: String},
    name: {type: String},
    description: {type: String},
    price: {type: Number},
    category: {type: String},
    // tags: [{
    //     type: String,
    //     enum: ['iPhone', 'Apple', 'Mobile'],
    //     message: '{VALUE} is not valid.'
    //   }],
//     variants: { type: [variantSchema] }, // Array of variants
//     inventory: { type: inventorySchema }, // Embedded inventory schema
});

export const ProductModel = model<I_product>('Product', productSchema);

