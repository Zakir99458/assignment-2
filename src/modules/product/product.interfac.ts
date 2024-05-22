import { Model } from "mongoose";
// Creating interface for product data
export type I_variant = {
    variantType: string;
    variantValue: string;
}

export type I_inventory = {
    quantity: number;
    inStock: boolean;
}

export type I_product = {
    id: string,
    name: string;
    description: string;
    price: number;
    category: string;
    // tags: string[];
    // variants: I_variant[];
    // inventory: I_inventory;
}

export type ProductInterface = Model<I_product, Record<string, never>>;
