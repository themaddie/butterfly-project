// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
// }

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const bcrypt = require('bcrypt');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');

router.use(session({
    secret: "secrett",
    resave: true,
    saveUninitialized: true,
})
);
router.use(cookieParser("secrett"));
router.use(passport.initialize());
router.use(passport.session());

const User = require('../models/Users');
require('../passportConfig')(passport);

// Log in
router.post('/login', async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
            });
        }
    })(req, res, next);
});

// Sign up
router.post('/signup', async (req, res) => {
    try {
        const doc = await User.findOne({ email: req.body.email });
        if (doc) {
            res.send("USER ALREADY EXIST!");
        }
        else if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            });
            await newUser.save();
            res.send("USER CREATED!");
        };
    } catch (error) {
        console.log(error);
    }
});

// Get
router.get('/users', async (req, res) => {
    const doc = await User.find();
    res.json(doc);
})

// WTF
router.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/')
})

module.exports = router;
