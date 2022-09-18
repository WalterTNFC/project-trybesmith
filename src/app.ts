import express from 'express';
import productsRoute from './routes/products';
import userRoute from './routes/user';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);

export default app;
