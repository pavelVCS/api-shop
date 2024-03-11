const { Router } = require('express');
const getAllProducts = require('../controllers/getAllProducts');

const router = Router();

// GET /product
router.get('/', (req, res) => {
  const data = getAllProducts();

  res.json(data);
});

// GET /product/:id
router.get('/:id', (req, res) => {
  res.send('get product by id');
});

module.exports = router;
