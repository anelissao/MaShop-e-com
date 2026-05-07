import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';

dotenv.config();

connectDB();
const Port = process.env.PORT || 5000;
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parser middlware
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(Port, () => console.log(`Backend is running on Port ${Port}`));
