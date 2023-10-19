const express = require('express');
const EventController = require('../controllers/EventController');
const AdminGuard = require('../guards/AdminGuard');


const router = express.Router();

module.exports = (app) => {
    router.get('/', AdminGuard.checkIsAdmin, EventController.showAll);

    router.get('/new', AdminGuard.checkIsAdmin, EventController.showAddEvent);
    router.post('/new', AdminGuard.checkIsAdmin, EventController.addEvent);

    app.use('/admin/events', router);
}