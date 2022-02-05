const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const { User } = require('../model');

passport.use(new LocalStrategy(async function verify(userEmail, password, cb) {
    try {
        // fetch user with the name provided
        const singleUser = await User.findAll({
            where: { email: userEmail }
        });
        
        // checks if user with the name provided exist
        if (!singleUser) { return cb(null, false, { message: 'Incorrect Email.' }) };
        
        // hash password provided and compare it if match
        crypto.pbkdf2(password, singleUser[0].buf, 310000, 32, 'sha256', function(err, hashedPassword) {
            if (err) { return cb(err); }
            
            // compare the two password
            if (!crypto.timingSafeEqual(singleUser[0].password, hashedPassword)) {
                return cb(null, false, { message: 'Incorrect Password.' });
            }
            
            return cb(null, singleUser);
        });
    } catch(error) {
        return cb(error);
    }
}));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, email: user.userEmail });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.post('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

router.post('/signup', async function(req, res, next) {
    // generate a cryptographically random data with the size of 16
    const buf = crypto.randomBytes(16);

    // convert the password to a hash password
    crypto.pbkdf2(req.body.password, buf, 310000, 32, 'sha256', async (err, hashedPassword) => {
        if (err) { return next(err); }

        // created an object with the user's credential
        const newUser = {
            email: req.body.userEmail,
            password: hashedPassword,
            buf: buf
        }
        try {
            // add new user to the database
            User.create(newUser);

            const user = {
                id: this.lastID,
                userEmail: req.body.userEmail
            };
            req.login(user, (error) => {
                if (error) return next(error);
                res.redirect('/');
            });
        } catch (error) {
            return next(error);
        }
    });
});

module.exports = router;
