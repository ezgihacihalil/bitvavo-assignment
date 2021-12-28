/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
      <Route {...rest} render={(props: any) => 
        localStorage.getItem('user') ?
              <Component {...props} />
              : <Redirect to="/login" />
      } />
  );
};

export default PrivateRoute;