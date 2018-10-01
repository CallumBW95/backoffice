import React, { Component } from 'react';
import axios from 'axios';
import Field from './_partials/_form';

import keys from '../../../config/keys';

class Login extends Component {
  constructor(props) {
    super(props);
    let state = { errors: [] }
  }

  componentDidMount() {
    document.body.addEventListener('click', e => {
      if (e.target.matches('#loginSubmit')) {
        axios.post(`/${keys.adminUrl}`, {
          email: document.getElementById('loginUsername').value,
          password: document.getElementById('loginPassword').value
        }).then((res) => {
          if (res.data && res.data == 'authenticated') {
            this.props.history.push({ pathname: `/${keys.adminUrl}/dashboard` });
          } else {
            console.log(res);
          }
        });
      }
    })
  }

render() {
  return (
    <div id='login'>
      {/* <Error messages={this.state.errors} /> */}
      <Field id='loginUsername' name='username' label='Username:' type='text'/>
      <Field id='loginPassword' name='password' label='Password:' type='text' />
      <input id='loginSubmit' name='submit' type='button' value='Login' />
    </div>
  )
}
}

export default Login;