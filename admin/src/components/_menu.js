import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import { connect } from "react-redux";
// import * as actions from "../actions";
// import axios from 'axios';

import keys from '../../../config/keys';

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		document.body.addEventListener('click', e => !e.target.matches('.menu span') || e.target.parentNode.classList.toggle('menu__link--expand'));
	}


	render() {
		return (
			<ul className="menu">
				<li className='menu__link'>
					<Link to={`/${keys.adminUrl}/dashboard`} className="menu__title">
						<i className='material-icons menu__icon'>dashboard</i>
						Dashboard
					</Link>
				</li>
				<li className='menu__link'>
					<Link to={`/${keys.adminUrl}/pages`} className="menu__title">
						<i className='material-icons menu__icon'>insert_drive_file</i>
						Pages
					</Link>
				</li>
				<li className='menu__link'>
					<span className='menu__title'>
						<i className='material-icons menu__icon'>chrome_reader_mode</i>
						Blog
						<i className="material-icons menu__cheveron">keyboard_arrow_right</i>
					</span>
					<ul className='menu__sub'>
						<li className='menu__link'>
							<Link to={`/${keys.adminUrl}/posts`} className='menu__title'>Posts</Link>
						</li>
						<li className='menu__link'>
							<Link to={`/${keys.adminUrl}/categories`} className='menu__title'>Categories</Link>
						</li>
					</ul>
				</li>
				<li className='menu__link'>
					<span className='menu__title'>
						<i className="material-icons menu__icon">settings</i>
						Settings
							<i className="material-icons menu__cheveron">keyboard_arrow_right</i>
					</span>
					<ul className='menu__sub'>
						<li className='menu__link'>
							<Link to={`/${keys.adminUrl}/settings/menu`} className='menu__title'>Menu</Link>
						</li>
						<li className='menu__link'>
							<Link to={`/${keys.adminUrl}/settings/social`} className='menu__title'>Social</Link>
						</li>
					</ul>
				</li>
			</ul>
		)
	}
}
export default Menu;