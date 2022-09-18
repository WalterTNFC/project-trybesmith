import express from 'express';
import productsRoute from './routes/products';
import userRoute from './routes/user';
import ordersRoute from './routes/orders';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);
app.use('/orders', ordersRoute);

export default app;
