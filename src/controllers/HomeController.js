class HomeController {
    homePage(req, res) {
        res.render('home/index');
    }
}

module.exports = new HomeController();