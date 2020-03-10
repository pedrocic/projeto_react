import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/pages/home/Home';
import UserCrud from '../components/pages/user/UserCrud';

export default function router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UserCrud} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
