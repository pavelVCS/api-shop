const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('get all procucts');
});

router.get('/:id', (req, res) => {
  res.send('get product by id');
});

module.exports = router;
