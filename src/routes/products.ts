import { Router } from 'express';
import { createProduct } from '../controllers/productControllers';

const products = Router();

products.post('/', createProduct);

export default products;