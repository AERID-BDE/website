const express = require('express');
const ContactController = require('../controllers/ContactController');

const router = express.Router();

module.exports = (app) => {
    router.get('/', ContactController.index);

    app.use('/contact', router);
}