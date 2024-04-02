const { Router } = require('express');
const { createProduct, updateProduct } = require('../controllers');
const verifyJWT = require('../middlewares/verifyJWT');

const router = Router();

// POST /product
router.post('/', verifyJWT, async (req, res) => {
  try {
    console.log('cia yra useris', req.user);
    const data = await createProduct(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

// PATCH /product/:id
router.patch('/:id', async (req, res) => {
  try {
    const data = await updateProduct(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
