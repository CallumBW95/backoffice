import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Read extends Component {
	state = {
		output: []
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let call = `/api/${this.props.path}`

		if (this.props.limit) call += `/${this.props.limit}`;
		if (this.props.page) call += `/${this.props.page}`;
		if (this.props.id) call += `/${this.props.id}`;

		axios
			.get(call, { proxy: { host: 'localhost', port: 3000 }})
			.then(res => this.setState({ output: res.data }))
			.catch(console.log);
	}

	render() {
		return this.props.children(this.state.output);
	}
}

Read.propTypes = {
	children: PropTypes.func.isRequired,
	path: PropTypes.string.isRequired,
	limit:PropTypes.number,
	page:PropTypes.number,
};

export default Read;
