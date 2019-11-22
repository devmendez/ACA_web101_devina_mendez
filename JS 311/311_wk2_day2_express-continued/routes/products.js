const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/products');


router.get('/products', productsControllers.list);

router.get('/products/:id', productsControllers.show);

router.post('/products', productsControllers.create);


module.exports = router;