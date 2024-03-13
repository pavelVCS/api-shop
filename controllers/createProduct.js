const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: String,
});

const Product = mongoose.model('Product', productSchema);

async function createProduct(props) {
  console.log(props);

  const response = await Product.create({
    title: 'Tomato',
    description: 'asdasd',
    img: 'https://source.unsplash.com/600x400/?tomato',
  });

  return response;
}

module.exports = createProduct;
