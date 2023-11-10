
class AdminHomeController {
    adminHomePage(req, res) {
        res.render('admin/home/index');
    }


}

module.exports = new AdminHomeController();