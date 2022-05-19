const express = require('express');
const route = express.Router();
const controller = require('../controller/product.controller')

route.post('/add',controller.add);
route.get('/view',controller.fetch);

module.exports = route;