const express = require('express');
const AdminGuard = require('../guards/AdminGuard');
const AdminEventController = require('../controllers/AdminEventController');



const router = express.Router();

module.exports = (app) => {
    router.get('/',  AdminEventController.showAll);

    router.get('/new',  AdminEventController.showAddEvent);
    router.post('/new',  AdminEventController.addEvent);

    router.get('/:id/edit',  AdminEventController.showEditEvent);
    router.post('/:id/edit',  AdminEventController.editEvent);

    app.use('/admin/events', AdminGuard.checkIsAdmin, router);
}