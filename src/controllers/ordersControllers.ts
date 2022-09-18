import { Request, Response } from 'express';
import * as ordersService from '../service/ordersService';

export async function getAllOrders(_req: Request, res: Response) {
  const { code, data } = await ordersService.getAllOrders();
  return res.status(code).json(data);
}

export default getAllOrders;