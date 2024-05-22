
import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
    console.log("I am in controller now..")
    try{
        
        const prodcutData = req.body;
        const result = await productService.createProductIntoDB(prodcutData);

        res.status(200).json({
            success: true,
            message: 'Data inserted',
            data: result
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: err
        });
        console.log(err);
    }
}

export const ProductController = {
    createProduct,
}