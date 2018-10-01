import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
// import { connect } from "react-redux";
// import * as actions from "../actions";
// import axios from 'axios';
import Login from './Login';

import keys from '../../../config/keys';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div id='page-wrapper'>
            <Switch>
              <Route exact path={`/${keys.adminUrl}`} component={Login} />
              <Route exact path={`/${keys.adminUrl}/dashboard`} render={props => <div>dashboard</div>} />

              <Route exact path={`/${keys.adminUrl}/pages`} render={props => <div>pages</div>} /> {/* list posts */}
              <Route exact path={`/${keys.adminUrl}/pages/:id`} render={props => <div>page</div>} /> {/* list posts */}

              <Route exact path={`/${keys.adminUrl}/blog`} render={props => <div>blogs</div>} /> {/* list posts */}
              <Route exact path={`/${keys.adminUrl}/blog/:id`} render={props => <div>blog</div>} /> {/* edit posts */}

              <Route exact path={`/${keys.adminUrl}/categories`} render={props => <div>categories</div>} /> {/* list categories */}
              <Route exact path={`/${keys.adminUrl}/categories/:id`} render={props => <div>category</div>} /> {/* edit categories */}

              <Route exact path={`/${keys.adminUrl}/menu`} render={props => <div>menu</div>} /> {/* Menu Editor */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;