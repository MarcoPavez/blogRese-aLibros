import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomePage } from "./pages";
import Publicacion from "./pages/PublicacionPage";

const App =()=>{
    return(
        //desde el navegador 
        <BrowserRouter>
        {/* Vamos a tener distintas rutas */}
            <Routes>
                {/* Expecificamos cada ruta */}
                <Route path="/" element={<HomePage/>}/>
                {/* <Route path="/Auto" element={<AutoPage/>}/> */}
                <Route path="/Publicaciones" element={<Publicacion/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;