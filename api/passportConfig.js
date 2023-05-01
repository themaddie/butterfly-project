const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/Users');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
            try {
                const user = await User.findOne({ email: email });
                if (user) {
                    bcrypt.compare(password, user.password, (err, res) => {
                        if (err) throw err;
                        if (res === true) return done(null, user)
                        else return done(null, false)
                    })
                }
                else if (!user) return done(null, false);
            } catch (error) {
                console.log(error)
            }
        })
    );

    passport.serializeUser((user, c) => {
        c(null, user.id);
    });
    passport.deserializeUser(async (id, c) => {
        const user = await User.findOne({ _id: id });
        const userInformation = {
            username: user.username,
        };
        c(err, userInformation);
    });
};