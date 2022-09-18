import express from 'express';
import productsRoute from './routes/products';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

export default app;
