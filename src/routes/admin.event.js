const express = require('express');
const EventController = require('../controllers/EventController');
const AdminGuard = require('../guards/AdminGuard');


const router = express.Router();

module.exports = (app) => {
    router.get('/',  EventController.showAll);

    router.get('/new',  EventController.showAddEvent);
    router.post('/new',  EventController.addEvent);

    router.get('/:id/edit',  EventController.showEditEvent);
    router.post('/:id/edit',  EventController.editEvent);

    app.use('/admin/events', AdminGuard.checkIsAdmin, router);
}