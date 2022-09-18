import { IOrders, StatusCode } from '../interfaces';
import * as ordersModel from '../models/ordersModel';

export async function getAllOrders() {
  const orders: IOrders[] = await ordersModel.getAllOrders();
  return { code: StatusCode.OK, data: orders };
}

export default getAllOrders;