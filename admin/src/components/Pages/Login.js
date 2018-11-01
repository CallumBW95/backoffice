import React, { Component } from "react";
import axios from "axios";
import Field from "../_partials/_field";

import keys from "../../../../config/keys";

class Login extends Component {
	state = { errors: [] };

	componentDidMount() {
		document.body.addEventListener("click", e => {
			if (e.target.matches("#loginSubmit")) {
				axios
					.post(`/${keys.adminUrl}`, {
						email: document.querySelector("#loginUsername input").value,
						password: document.querySelector("#loginPassword input").value
					})
					.then(res => {
						if (res.data && res.data == "authenticated") {
							this.props.history.push({
								pathname: `/${keys.adminUrl}/dashboard`
							});
						} else {
							this.setState({ errors: res.data });
							console.log(this.state.errors);
						}
					});
			}
		});
	}

	render() {
		return (
			<div id="login">
				<img src="/build/img/midnight_logo.png" alt="logo" />
				{this.state.errors}
				{/* <Error messages={this.state.errors} /> */}
				<Field
					id="loginUsername"
					name="username"
					label="Username:"
					type="text"
				/>
				<Field
					id="loginPassword"
					name="password"
					label="Password:"
					type="password"
				/>
				<input id="loginSubmit" name="submit" type="button" value="Login" />
			</div>
		);
	}
}

export default Login;
