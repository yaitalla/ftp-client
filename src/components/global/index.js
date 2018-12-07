import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { divGlobal } from './style';
import Login from '../login';
import Signup from '../signup';
import Ftp from '../ftp';
import Navigation from '../navigation/';
import Game from '../ppc';

const Global = () =>
  <Router>
    <div style={divGlobal}>
      <Navigation/>
      <Route exact path={'/ppc'} component={Game} />
      <Route exact path={'/login'} component={Login} />
      <Route exact path={'/signup'} component={Signup} />
      <Route exact path={'/ftp'} component={Ftp} />
    </div>
  </Router>

export default Global;
