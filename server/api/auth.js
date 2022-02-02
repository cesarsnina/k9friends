const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const { User, db } = require('../model');

const router = express.Router();

passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT rowid AS id, * FROM Users WHERE username = ?', [ username ], function(err, row) {
        if (err) { return cb(err); }
        if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

        crypto.pbkdf2(password, row.buf, 310000, 32, 'sha256', function(err, hashedPassword) {
            if (err) { return cb(err); }
            if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
                return cb(null, false, { message: 'Incorrect username or password.' });
            }
            return cb(null, row);
        });
    });
}));
  
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, username: user.username });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.post('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

router.get('/signup', function(req, res, next) {
    res.render('signup');
});

router.post('/signup', async function(req, res, next) {
    // generate a cryptographically random data with the size of 16
    const buf = crypto.randomBytes(16);

    // convert the password to a hash password
    crypto.pbkdf2(req.body.password, buf, 310000, 32, 'sha256', async (err, hashedPassword) => {
        if (err) { return next(err); }

        // created an object with the user's credential
        const newUser = {
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword.toString('hex'),
            buf: buf
        }
        try {
            // add new user to the database
            User.create(newUser);

            const user = {
                id: this.lastID,
                username: req.body.username
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
