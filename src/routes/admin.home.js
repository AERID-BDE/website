const express = require('express');
const AdminHomeController = require('../controllers/AdminHomeController');

const router = express.Router();

module.exports = (app) => {
    router.get('/', AdminHomeController.adminHomePage);

    app.use('/admin', router);
}