const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/Users');

router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });
    console.log(user);
});

router.post('/signup', async (req, res) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
        });
        user.save();
        res.json(user);
        console.log(user);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;