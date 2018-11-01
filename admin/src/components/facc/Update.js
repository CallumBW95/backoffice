import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Update extends Component {
	constructor(props) {
		super(props);

		this.state = {
			output: []
		};
	}

	submitForm(arr) {
		let form = {};

		Object.keys(arr).map(field => {
			const el = document.getElementById(field.replace('_','')) || false;
			let value = false;

			if (el) {
				let type = el.querySelector('div:nth-child(2)') || false;
				
				switch (type) {
				case 'field__text':
					value = el.querySelector(`.${type.className}`).value;
					break;
				case 'field__wysiwyg':
					value = el.querySelector(`.${type.className} .pell-content`).value;
					break;
				}
			}
			
			if (value) {
				form[field] = value;
			}
		});

		console.log({form, arr});
		
		return form;
	}

	render() {
		return this.props.children(this.state);
	}
}

Update.propTypes = {
	children: PropTypes.func.isRequired,
	// type: PropTypes.string.isRequired,
	// id: PropTypes.string.isRequired
};

export default Update;
