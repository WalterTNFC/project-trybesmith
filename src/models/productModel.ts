import { ResultSetHeader } from 'mysql2';
import { IProductsBody, IProducts } from '../interfaces';
import connection from './connection';

export async function createProduct(product: IProductsBody): Promise<IProducts> {
  const { name, amount } = product;
  console.log({ name, amount });
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct = { id, name, amount };
  return newProduct;
}

export default createProduct;
