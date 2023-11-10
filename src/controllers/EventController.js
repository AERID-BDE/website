const Event = require('../models/Event')

class EventController {
    async showAll(req, res){
        const events = await Event.find().catch(err => console.log(err))
        res.render('event/index', { events })
    }

}

module.exports = new EventController();