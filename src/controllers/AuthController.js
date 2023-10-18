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
                    res.redirect('/');
                }
            });
        } else {
            res.render('auth/login', {
                error: 'Mot de passe ou email incorrect.'
            });
        }
    }

    showRegister(req, res) {
        res.render('auth/register', {
            error: null
        });
    }

    async handleRegister(req, res) {
        if (req.body.password !== req.body.password_confirmation) {
            return res.render('auth/register', {
                error: 'Le mot de passe et la confirmation doivent être identiques.'
            });
        }

        if(req.body.password.length < 8) {
            return res.render('auth/register', {
                error: 'Le mot de passe doit contenir au moins 8 caractères.'
            });
        }

        if(await User.findOne({username: req.body.username})) {
            return res.render('auth/register', {
                error: 'Un utilisateur existe déjà avec ce nom d\'utilisateur.'
            });
        }

        if(await User.findOne({email: req.body.email})) {
            return res.render('auth/register', {
                error: 'Un utilisateur existe déjà avec cet email.'
            });
        }

        const user = new User(req.body);
        await user.save();
        req.session.user = user;
        res.redirect('/');
    }

    async handleLogout(req, res) {
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = new AuthController();