import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { divGlobal } from './style';
import Auth from '../auth';
import Ftp from '../ftp';
import Navigation from '../Navigation/';
//import Home from '../home';

const Global = () =>
  <Router>
    <div style={divGlobal}>
      <Navigation/>
      <Route exact path={'/login'} component={Auth} />
      <Route exact path={'/ftp'} component={Ftp} />
    </div>
  </Router>

export default Global;
