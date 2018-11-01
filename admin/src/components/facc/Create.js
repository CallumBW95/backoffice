import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Create extends Component {
	constructor(props) {
		super(props);
	}
	
	ajax() {
		let {type} = this.props;
		let fields = [...document.querySelectorAll(".field")];
		let values = {};

		values['title'] = document.querySelector('h1').innerText;

		fields.map(field => {
			let name = field.id;
			let type = [...field.children[1].classList][0].replace("field__", "");

			switch (true) {
			case type == "text":
				return (values[name] = field.querySelector("input").value);
			case type == "switch":
				return (values[name] = field.querySelector("input").checked);
			case type == "wysiwyg":
				return (values[name] = field.querySelector(".pell-content").innerHTML);
			}
		});

		axios.post(`/api/${type}`, values)
			.then(res => {
				if (res.data[type] != '') {
					console.log('success', res.data);
				} else {
					console.warn('failed', res.data);
				}
			});
	}

	render() {
		return this.props.children(this.ajax);
	}
}

Create.propTypes = {
	type: PropTypes.string.isRequired,
	children: PropTypes.func.isRequired
};

export default Create;
