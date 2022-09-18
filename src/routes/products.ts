import { Router } from 'express';
import { createProduct, getAllProducts } from '../controllers/productControllers';

const products = Router();

products.get('/', getAllProducts);
products.post('/', createProduct);

export default products;