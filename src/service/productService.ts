import { IProductsBody, IProducts, StatusCode, ProductServiceData } from '../interfaces';
import * as productModel from '../models/productModel';

export async function createProduct(product: IProductsBody): Promise<ProductServiceData> {
  const newProduct: IProducts = await productModel.createProduct(product);
  return { code: StatusCode.CREATED, data: newProduct };
}

export default createProduct;

// export function createProduct(product: Product): { status: any; data: any; error: any; } | PromiseLike<{ status: any; data: any; error: any; }> {
//   throw new Error('Function not implemented.');
// }
