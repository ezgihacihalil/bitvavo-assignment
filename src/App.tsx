import React from 'react';

import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ShipsPage from './pages/ShipsPage';

import PrivateRoute from './components/PrivateRoute';
import history from './helpers/history';

const App = () => (
  <div className="app">
    <>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={ShipsPage} />
          <Route path="/login" component={LoginPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  </div>
);

export default App;