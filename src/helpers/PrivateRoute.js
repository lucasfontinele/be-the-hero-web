import React from 'react';
import { Route } from 'react-router-dom';

import { getId } from '../services/auth';

const id = getId();

export default function PrivateRoute({ component: Component }, ...rest) {
  return (
    <Route
      {...rest}
      render={(props) =>
        id ? <Component {...props} /> : window.location.assign('/')
      }
    />
  );
}
