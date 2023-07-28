import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Home from './pages/home';
import Loading from './pages/loadingpage';

const Channel = lazy(() => import('./pages/channel'));
const WhatsOn = lazy(() => import('./pages/whats-on'));
const Tickets = lazy(() => import('./pages/tickets'));
const Collection = lazy(() => import('./pages/collection'));

export default function RouterComponent() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/whats-on" element={<WhatsOn />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
