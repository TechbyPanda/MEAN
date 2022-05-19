const express = require('express');
const router=express.Router();
const multer = require('multer');
var storage = multer.diskStorage(
    {
        destination: 'public/images',
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    });

var upload = multer({ storage: storage });

const controller = require('../controller/product.controller');

router.post('/add',upload.array('images'),controller.add);
router.get('/view',controller.fetch);

module.exports = router;