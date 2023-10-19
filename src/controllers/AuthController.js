const User = require('../models/User');
class AuthController {

    showLogin(req, res) {
        res.render('auth/login', {
            error: null
        });
    }

    async handleLogin(req, res) {
        const user = await User.findOne({email: req.body.email});
        if (user) {
            return user.comparePassword(req.body.password, (err, isMatch) => {
                if (!isMatch) {
                    res.render('auth/login', {
                        error: 'Mot de passe ou email incorrect.'
                    });
                }
                else {
                    req.session.user = user;
                    res.redirect('/admin');
                }
            });
        } else {
            res.render('auth/login', {
                error: 'Mot de passe ou email incorrect.'
            });
        }
    }

    async handleLogout(req, res) {
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = new AuthController();