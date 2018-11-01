// const express = require('express');
// const uuid = require('uuid/v4');
// const session = require('express-session');
// const FileStore = require('session-file-store')(session);
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const axios = require('axios');
// const bcrypt = require('bcrypt-nodejs');
// const path = require("path");
// const keys = require('../../config/keys');

const requireAuth = require('../../middleware/requireAuth');

const Page = mongoose.model("Pages");

module.exports = app => {
	// get pages
	app.get(`/api/pages/:limit/:page`, requireAuth, (req, res) => {
		const {page, limit} = req.params;

		Page.find({}, { page: parseInt(page), limit: parseInt(limit) })
			.then(response => res.send(response))
			.catch(error => res.send({error}));
		// res.send({test:'test'});
	});

	app.get(`/api/pages`, requireAuth, (req, res) => {
		Page.find({})
			.then(response => res.send(response))
			.catch(error => res.send({error}));
		// res.send({test:'test'});
	});

	// get page
	app.get(`/api/page/:id`, requireAuth, (req, res) => {
		Page.findById(req.params.id, (err, page) => {
			if (!err) {
				return res.send(page);
			}
			return res.send({err});
		});
	});

	// create page
	app.post(`/api/page`, requireAuth, async (req, res, next) => {
		let page = '';

		if (req.body.title && req.body.content) {
			page = await new Page(req.body).save();
		}
		
		res.send({page});
	});

	// delete page/s
	app.delete(`/api/page`, requireAuth, (req, res, next) => {
		console.log(req);
	});
};