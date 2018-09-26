import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../actions";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div id='page-wrapper'>
              <Switch>
                <Route exact path='/' render={props => <div>login1</div>} /> 
                <Route exact path='/backoffice' render={props => <div>login2</div>} /> 
              </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);