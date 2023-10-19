const express = require('express');
const EventController = require('../controllers/EventController');
const AuthController = require('../controllers/AuthController');
const AuthGuard = require("../guards/AuthGuard");


const router = express.Router();

module.exports = (app) => {
    router.get('/', EventController.showAll);

    router.get('/new', EventController.showAddEvent);
    router.post('/new', EventController.addEvent);

    app.use('/events', router);
}