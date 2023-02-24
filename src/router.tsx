import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Loading from './pages/loadingpage';

const Channel = lazy(() => import('./pages/channel'));
const WhatsOn = lazy(() => import('./pages/whats-on'));
const Tickets = lazy(() => import('./pages/tickets'));
const Collection = lazy(() => import('./pages/collection'));

export default function RouterComponent() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/channel">
            <Channel />
          </Route>
          <Route path="/whats-on">
            <WhatsOn />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
          <Route path="/collection">
            <Collection />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
