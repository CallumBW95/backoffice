import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
// import { connect } from "react-redux";
// import * as actions from "../actions";
// import axios from 'axios';
import Login from './Login';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(Cookies.get('username'));

    // color: #1c2340; level up from background
    // color: #4479f8; selected
    // color: #faa441; link
    // color: #151933; background
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div id='page-wrapper'>
            <Switch>
              <Route exact path='/backoffice' component={Login} />
              <Route exact path='/backoffice/dashboard' render={props => <div>dashboard</div>} />

              <Route exact path='/backoffice/pages' render={props => <div>pages</div>} /> {/* list posts */}
              <Route exact path='/backoffice/pages/:id' render={props => <div>page</div>} /> {/* list posts */}
              
              <Route exact path='/backoffice/blog' render={props => <div>blogs</div>} /> {/* list posts */}
              <Route exact path='/backoffice/blog/:id' render={props => <div>blog</div>} /> {/* edit posts */}

              <Route exact path='/backoffice/blog/categories' render={props => <div>categories</div>} /> {/* list categories */}
              <Route exact path='/backoffice/blog/categories/:id' render={props => <div>category</div>} /> {/* edit categories */}

              <Route exact path='/backoffice/menu' render={props => <div>menu</div>} /> {/* Menu Editor */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
// export default connect(null, actions)(App);