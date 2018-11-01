const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const axios = require('axios');
// const bcrypt = require('bcrypt-nodejs');
const path = require("path");

const User = mongoose.model("Users");

const keys = require('../config/keys');

module.exports = app => {
	// add & configure middleware
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(session({
		genid: (req) => {
			return uuid(); // use UUIDs for session IDs
		},
		store: new FileStore(),
		secret: keys.sessionSecret,
		resave: false,
		saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());

	// configure passport.js to use the local strategy
	passport.use(new LocalStrategy(
		{ usernameField: 'email' },
		async (email, password, done) => {
			const user = await User.findOne({ email: email });

			if (user && password == user.password) {
				return done(null, user);
			}
			
			// await new User({
			//   email: email,
			//   password: password
			// }).save();

			// console.log('try');
			// bcrypt.hash(password, keys.saltRounds)
			//   .then(async (err, hash) => {
			//     console.log(err, hash)
			//   });

			return done(null, false);
		}
	));

	// tell passport how to serialize the user
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id).then(user => {
			done(null, user);
		});

		// axios.get(`http://localhost:5000/users/${id}`)
		//   .then(res => done(null, res.data))
		//   .catch(error => done(error, false))
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
		// if (req.isAuthenticated()) {
		// 	res.redirect(`/${keys.adminUrl}/dashboard`);
		// } else {
			res.sendFile(path.resolve(__dirname, "../", "admin", "build", "index.html"));
		// }
	});

	app.post(`/${keys.adminUrl}`, (req, res, next) => {
		passport.authenticate('local', (err, user, info) => {
			switch (true) {
			case (info):
				return res.send(info.message);
			case (err):
				return next(err);
			case (!user):
				return res.send('User Not Found!');
			}

			req.login(user, (err) => {
				if (err) {
					return next(err);
				}

				return res.send('authenticated');
			});
		})(req, res, next);
	});
};