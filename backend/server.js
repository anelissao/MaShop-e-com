import express from 'express';
import connectDB from './config/db.js';
import products from './products.js';
import dotenv from 'dotenv';
dotenv.config();

connectDB();
const Port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(Port, () => console.log(`Backend is running on Port ${Port}`));
