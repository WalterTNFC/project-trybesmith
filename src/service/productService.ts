import { IProductsBody, IProducts, StatusCode, ProductServiceData } from '../interfaces';
import * as productModel from '../models/productModel';

export async function createProduct(product: IProductsBody): Promise<ProductServiceData> {
  const newProduct: IProducts = await productModel.createProduct(product);
  return { code: StatusCode.CREATED, data: newProduct };
}

export async function getAllProducts() {
  const getAll = await productModel.getAllProducts();
  return { code: StatusCode.OK, data: getAll };
}

export default createProduct;
