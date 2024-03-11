const express = require('express');
const app = express();

//routes
const productGetterRoutes = require('./routes/productGetterRoutes');

app.use('/product', productGetterRoutes);

app.post('/product', (req, res) => {
  res.send('Shop backend works!');
});

app.patch('/product/:id', (req, res) => {
  res.send('Shop backend works!');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
