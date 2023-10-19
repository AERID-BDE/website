const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

module.exports = (app) => {
    router.get('/', ProductController.showAll);

    router.get('/new', ProductController.showAdd);
    router.post('/new', ProductController.handleAdd);

    app.use('/products', router);
}