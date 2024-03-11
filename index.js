const express = require('express');
const app = express();
const PORT = 3000;

app.use('/product', require('./routes/productGetterRoutes'));
app.use('/product', require('./routes/productSetterRoutes'));

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
