import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from './components/App';

//dev purposes:
import axios from "axios";
window.axios = axios;

// import styles from './scss/index.scss';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);