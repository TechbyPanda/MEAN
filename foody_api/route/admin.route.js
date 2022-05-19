const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controller');

router.post('/signin',adminController.signin);

module.exports = router;