import { Router } from 'express';
import { getAllOrders } from '../controllers/ordersControllers';

const orders = Router();

orders.get('/', getAllOrders);

export default orders;