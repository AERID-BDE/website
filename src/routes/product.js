const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

module.exports = (app) => {
    router.get('/', ProductController.showAll);

    app.use('/products', router);
}