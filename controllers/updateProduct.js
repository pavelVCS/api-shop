const { Types } = require('mongoose');

function updateProduct(id) {
  console.log(Types.ObjectId.isValid(id));

  if (!Types.ObjectId.isValid(id)) {
    throw new Error('id is required. Check if it is provided and string');
  }

  return 'product updated';
}

module.exports = updateProduct;
