import Global from "./components/global/";
import ReactDOM from "react-dom";
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import {computerChoice} from './actions';
import { Router } from 'react-router';
import routes from './routes';
window.store = store;
window.computerChoice = computerChoice;
ReactDOM.render((
  <Provider store={store}>
    <Global/>
  </Provider>
), document.getElementById('whis'));
