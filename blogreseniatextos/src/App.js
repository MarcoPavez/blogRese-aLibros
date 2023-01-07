import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Publicacion, TablaPublicacionesPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/Publicaciones" element={<Publicacion />} />

        <Route path="/TablaPublicaciones" element={<TablaPublicacionesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
