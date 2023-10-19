const express = require('express');
const EventController = require('../controllers/EventController');


const router = express.Router();

module.exports = (app) => {
    router.get('/', EventController.showAll);

    app.use('/events', router);
}