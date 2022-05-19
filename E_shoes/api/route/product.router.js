const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');

router.post('/add-product',productController.create);

module.exports = router;