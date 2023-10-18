class AdminGuard {

    checkUserLogged(req, res, next) {
        const baseUrl = req?.baseUrl;
        const isAdmin = req?.session?.user ? req.session.user.isAdmin : false;

        if (baseUrl.includes("auth")) {
            if (isAdmin === true) {
                res.redirect('/');
            } else {
                return next();
            }
        } else {
            if (isAdmin === true) {
                return next();
            } else {
                res.redirect('/auth/login');
            }
        }
    }
}