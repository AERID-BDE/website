class AdminHomeController {
    adminHomePage(req, res) {
        res.render('adminHome/index');
    }

}

module.exports = new AdminHomeController();