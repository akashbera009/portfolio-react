// Router shell. / → V1Root (live site), /v2 → V2Root (in-progress redesign).
// Both roots are lazy-loaded so the v2 bundle is a separate chunk that only
// downloads when /v2 is visited — visitors on / pay zero bytes for v2.

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoadingScreen from './shared/components/LoadingScreen/LoadingScreen';
import './App.css';

const V1Root = lazy(() => import('./v1/V1Root'));
const V2Root = lazy(() => import('./v2/V2Root'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen onComplete={() => {}} />}>
        <Routes>
          <Route path="/" element={<V1Root />} />
          <Route path="/v2" element={<V2Root />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
