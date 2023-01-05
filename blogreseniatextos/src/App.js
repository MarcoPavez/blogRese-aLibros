import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Publicacion } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

         <Route path="/Publicacion" element={<Publicacion />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App
