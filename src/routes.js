import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './helpers/PrivateRoute';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
