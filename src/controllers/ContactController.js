class ContactController {

    index(req, res) {
        res.render('contact/index');
    }
}

module.exports = new ContactController();