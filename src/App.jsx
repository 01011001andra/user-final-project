import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Beranda = lazy(() => import("./pages/beranda"));
const Acara = lazy(() => import("./pages/acara"));
const Ceramah = lazy(() => import("./pages/ceramah"));
const Keuangan = lazy(() => import("./pages/keuangan"));

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/acara" element={<Acara />} />
        <Route path="/ceramah" element={<Ceramah />} />
        <Route path="/keuangan" element={<Keuangan />} />
      </Routes>
    </Suspense>
  );
};

export default App;
