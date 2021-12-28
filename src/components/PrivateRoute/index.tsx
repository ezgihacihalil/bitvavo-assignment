import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: React.ComponentType<any>;
  exact: boolean;
  path: string;
}

export const PrivateRoute: React.FC<Props> = ({ component: Component, exact, path }) => (
  <Route exact={exact} path={path} render={props => (
      localStorage.getItem('user')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)