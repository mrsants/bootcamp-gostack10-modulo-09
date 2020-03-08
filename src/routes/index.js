import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashbord from '../pages/Dashbord';
import Profile from '../pages/Profile';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashbord} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
