class EventController {
    showAll(req, res){
        res.render('event/index')
    }
    addEvent(req, res){
        res.render('event/new')
    }
}

module.exports = new EventController();