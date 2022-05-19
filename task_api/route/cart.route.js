const express = require('express');
const route = express.Router();
const controller = require('../controller/cart.controller');

route.post('/add-to-cart',controller.add);
route.post('/view',controller.view);
route.post('/delete',controller.delete);

module.exports = route;