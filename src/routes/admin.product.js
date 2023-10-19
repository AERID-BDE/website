const express = require('express');
const ProductController = require('../controllers/ProductController');
const AdminGuard = require('../guards/AdminGuard');

const router = express.Router();

module.exports = (app) => {
    router.get('/', AdminGuard.checkIsAdmin, ProductController.showAll);

    router.get('/new', AdminGuard.checkIsAdmin, ProductController.showAdd);
    router.post('/new', AdminGuard.checkIsAdmin, ProductController.handleAdd);

    app.use('/admin/products', router);
}