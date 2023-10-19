const express = require('express');
const EventController = require('../controllers/EventController');
const AdminGuard = require('../guards/AdminGuard');


const router = express.Router();

module.exports = (app) => {
    router.get('/',  EventController.showAll);

    router.get('/new',  EventController.showAddEvent);
    router.post('/new',  EventController.addEvent);

    app.use('/admin/events', router);
}