const Event = require("../models/Event");

class AdminEventController {
    async showAll(req, res){
        const events = await Event.find().catch(err => console.log(err))
        res.render('admin/event/index', { events })
    }

    showAddEvent(req, res){
        res.render('admin/event/new')
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
        res.redirect('/admin/events')
    }

    async showEditEvent(req, res) {
        const myEvent = await Event.findById(req.params.id).catch(err => console.error(err))
        console.log(myEvent)
        res.render('admin/event/edit', { myEvent })
    }
    async editEvent (req,res,next) {
        const editedEventForm = req.body
        await Event.findByIdAndUpdate(req.params.id, editedEventForm)
        res.redirect('/admin/events')
    }

}

module.exports = new AdminEventController();