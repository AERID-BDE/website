const express = require('express');
const AdminGuard = require('../guards/AdminGuard');
const AdminProductController = require('../controllers/AdminProductController')



const router = express.Router();

module.exports = (app) => {
    router.get('/',  AdminProductController.showAll);

    router.get('/new', AdminProductController.showAddProduct);
    router.post('/new', AdminProductController.addProduct);

    router.get('/:id/edit',  AdminProductController.showEditProduct);
    router.post('/:id/edit',  AdminProductController.editProduct);

    app.use('/admin/products', AdminGuard.checkIsAdmin, router);
}