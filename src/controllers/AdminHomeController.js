const Event = require("../models/Event");
const Product = require("../models/Product");


class AdminHomeController {
    adminHomePage(req, res) {
        res.render('admin/home/index');
    }

    async showEvent(req, res) {
        const events = await Event.find().catch(err => console.log(err))
        res.render('admin/event/index', { events })
    }

}

module.exports = new AdminHomeController();