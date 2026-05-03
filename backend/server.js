import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();
const Port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/api/products', productRoutes);

app.listen(Port, () => console.log(`Backend is running on Port ${Port}`));
