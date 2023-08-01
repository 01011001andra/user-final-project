import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components";

const Beranda = lazy(() => import("./pages/beranda"));
const Acara = lazy(() => import("./pages/acara"));
const Ceramah = lazy(() => import("./pages/ceramah"));
const Keuangan = lazy(() => import("./pages/keuangan"));
const DetailAcara = lazy(() => import("./pages/detailAcara"));

const App = () => {
  return (
    <Suspense
      fallback={<Loading loadingName="Halaman" className="w-screen h-screen" />}
    >
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/acara" element={<Acara />} />
        <Route path="/acara/:id" element={<DetailAcara />} />
        <Route path="/ceramah" element={<Ceramah />} />
        <Route path="/keuangan" element={<Keuangan />} />
      </Routes>
    </Suspense>
  );
};

export default App;
