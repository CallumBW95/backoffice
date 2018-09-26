const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("Users");

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      // if (err) { return done(err); }
      // if (!user) {
      //   return done(null, false, { message: 'Incorrect username.' });
      // }
      // if (!user.validPassword(password)) {
      //   return done(null, false, { message: 'Incorrect password.' });
      // }
      // return done(null, user);

      switch (true) {
        case err:
          return done(err);
        case !user:
          return done(null, false, { message: 'Incorrect username.' });
        case !user.validPassword(password):
          return done(null, false, { message: 'Incorrect password.' });
      }
    });
  }
));