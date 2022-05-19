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
const controller = require('../controller/customer.controller');

router.post('/signup',upload.single('image'),controller.signup);
router.post('/signin',controller.signin);

module.exports = router;