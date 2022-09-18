import { Request, Response } from 'express';
import { IProductsBody } from '../interfaces';
import * as productServices from '../service/productService';

export async function createProduct(req: Request<unknown, unknown, IProductsBody>, res: Response) {
  const { name, amount } = req.body;
  const { code, data, error } = await productServices.createProduct({ name, amount });

  return error
    ? res.status(code).json({ error })
    : res.status(code).json(data);
}

export async function getAllProducts(_req: Request, res: Response) {
  const { code, data } = await productServices.getAllProducts();
  return res.status(code).json(data);
}

export default createProduct;