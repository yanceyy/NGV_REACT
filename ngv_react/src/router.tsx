import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Channel from './pages/channel';
import WhatsOn from './pages/whats-on';

export default function RouterComponent() {
  return (
    <>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/channel"><Channel /></Route>
        <Route exact path="/whats-on"><WhatsOn /></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
