import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.body.addEventListener('click', e => {
      if (e.target.matches('#loginSubmit')){
        axios.post('/backoffice',{
          email:document.getElementById('loginUsername').value,
          password:document.getElementById('loginPassword').value
        }).then(({data}) => {
          if (data == 'authenticated') {
            this.props.history.push({pathname: 'dashboard'});
          } else {
            console.log('no')
          }
        })
      }
    })
  }

  render() {
    return (
      <div id='login'>
        <div class='field'>
          <label for='username'>Username:</label>
          <input id='loginUsername' name='username' type='text' />
        </div>
        <div class='field'>
          <label for='password'>Password:</label>
          <input id='loginPassword' name='password' type='text' />
        </div>
        <input id='loginSubmit' name='submit' type='button' value='Login' />
      </div>
    )
  }
}

export default Login;