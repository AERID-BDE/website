const express = require('express');
const HomeController = require('../controllers/HomeController');

const router = express.Router();

module.exports = (app) => {
    router.get('/', HomeController.homePage);

    app.use('/', router);
}