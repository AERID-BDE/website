const Event = require('../models/Event')

class EventController {
    async showAll(req, res){
        const events = await Event.find().catch(err => console.log(err))
        res.render('event/index', { events })
    }

    showAddEvent(req, res){
        res.render('event/new')
    }

    async addEvent(req, res){
        const { title, description, eventDate, price, image, location } = req.body
        const event = new Event ({
            title,
            description,
            eventDate,
            price,
            image,
            location
        })
        await event.save().catch(err => console.error(err))
        res.redirect('/')
    }

}

module.exports = new EventController();