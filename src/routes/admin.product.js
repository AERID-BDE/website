const express = require('express');
const ProductController = require('../controllers/ProductController');
const AdminGuard = require('../guards/AdminGuard');

const router = express.Router();

module.exports = (app) => {
    router.get('/',  ProductController.showAll);

    router.get('/new', ProductController.showAdd);
    router.post('/new', ProductController.handleAdd);

    app.use('/admin/products', AdminGuard.checkIsAdmin, router);
}