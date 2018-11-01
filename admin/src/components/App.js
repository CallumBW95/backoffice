import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Cookies from "js-cookie";
// import { connect } from "react-redux";
// import * as actions from "../actions";
import axios from "axios";
import Login from "./Pages/Login";
import Pages from "./Pages/Pages";
import EditPage from "./Pages/EditPage";
import CreatePage from "./Pages/CreatePage";
import Menu from "./_menu";

import "normalize.css";

import keys from "../../../config/keys";

window.axios = axios;

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route
							path={`/${keys.adminUrl}/*`}
							render={props => (
								<div id="topbar">
									<img src="/build/img/midnight_logo.png" alt="logo" />
									<span>login</span>
								</div>
							)}
						/>
					</Switch>
					<Switch>
						<Route
							path={`/${keys.adminUrl}/*`}
							render={props => (
								<div id="sidebar">
									<Menu />
								</div>
							)}
						/>
					</Switch>
					<Switch>
						<Route exact path={`/${keys.adminUrl}`} component={Login} />
						<Route
							exact
							path={`/${keys.adminUrl}/dashboard`}
							render={props => <div>dashboard</div>}
						/>
						{/* list posts */}
						<Route
							exact
							path={`/${keys.adminUrl}/pages`}
							render={props => <Pages {...props} />}
						/>
						{/* Create posts */}
						<Route
							exact
							path={`/${keys.adminUrl}/page/new`}
							render={props => <CreatePage {...props}>page</CreatePage>}
						/>
						{/* Edit posts */}
						<Route
							exact
							path={`/${keys.adminUrl}/page/:id`}
							render={props => <EditPage {...props}>page</EditPage>}
						/>
						{/* list posts */}
						<Route
							exact
							path={`/${keys.adminUrl}/posts`}
							render={props => <div>posts</div>}
						/>
						{/* edit posts */}
						<Route
							exact
							path={`/${keys.adminUrl}/post/:id`}
							render={props => <div>post</div>}
						/>
						{/* list categories */}
						<Route
							exact
							path={`/${keys.adminUrl}/categories`}
							render={props => <div>categories</div>}
						/>
						{/* edit categories */}
						<Route
							exact
							path={`/${keys.adminUrl}/category/:id`}
							render={props => <div>category</div>}
						/>
						{/* Menu Editor */}
						<Route
							exact
							path={`/${keys.adminUrl}/settings/menu`}
							render={props => <div>menu</div>}
						/>
						{/* Socail Links */}
						<Route
							exact
							path={`/${keys.adminUrl}/settings/social`}
							render={props => <div>social</div>}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
