import express from 'express';
import CarRoute from './Routes/CarRoute';

const app = express();

app.use(express.json());
app.use('/cars', CarRoute);

export default app;