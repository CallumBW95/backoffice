const express = require('express');
const uuid = require('uuid/v4');
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');
const bcrypt = require('bcrypt-nodejs');
const path = require("path");

const keys = require('../config/keys');

module.exports = app => {
  // add & configure middleware
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(session({
    genid: (req) => {
      return uuid() // use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: true
  }))
  app.use(passport.initialize());
  app.use(passport.session());

  // configure passport.js to use the local strategy
  passport.use(new LocalStrategy(
    { usernameField: 'email' },
    (email, password, done) => {
      console.log(email, password);
      axios.get(`http://localhost:5000/users?email=${email}`)
        .then(res => {
          const user = res.data[0]
          if (!user) {
            return done(null, false, { message: 'Invalid credentials.\n' });
          }
          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: 'Invalid credentials.\n' });
          }
          return done(null, user);
        })
        .catch(error => done(error));
    }
  ));

  // tell passport how to serialize the user
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then(res => done(null, res.data))
      .catch(error => done(error, false))
  });

  // server static files
  app.get('/build/js/bundle.js', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'admin', 'build', 'js') + '/bundle.js'));

  // create the login get and post routes
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../", "admin", "build", "index.html"));
  });

  app.get(`/${keys.adminUrl}/*`, (req, res) => {
    if (req.isAuthenticated()) {
      res.sendFile(path.resolve(__dirname, "../", "admin", "build", "index.html"));
    } else {
      res.redirect(`/${keys.adminUrl}`)
    }
  });

  app.get(`/${keys.adminUrl}`, (req, res) => {
    res.sendFile(path.resolve(__dirname, "../", "admin", "build", "index.html"));
  });

  app.post(`/${keys.adminUrl}`, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      switch (true) {
        case (info):
          return res.send(info.message);
        case (err):
          return next(err);
        case (!user):
          return res.redirect('/backoffice');
      }

      req.login(user, (err) => {
        if (err)
          return next(err);

        return res.send('authenticated');
      });
    })(req, res, next);
  });


}