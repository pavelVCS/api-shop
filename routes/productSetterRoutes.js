const { Router } = require('express');

const router = Router();

// POST /product
router.post('/', (req, res) => {
  res.send('create new product');
});

// PATCH /product/:id
router.patch('/:id', (req, res) => {
  res.send('edit existing product');
});

module.exports = router;
