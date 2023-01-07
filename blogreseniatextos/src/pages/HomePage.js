import React from "react";
/* import { useNavigate } from "react-router-dom"; */
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartaPublicaciones } from "../components/CartaPublicaciones";
import Top from "../components/Top";
import { Body, SideBar } from "../components";

/* import Top from "../components/Top"; */

const Homepage = () => {
  /* const navigate = useNavigate();  */

  return (
    <div>
      <div>
        <Top />
      </div>
      <div class="container">
        <Header />
        
          <h3 class="text-center" id="headerPublicacionesRecientes">
            Publicaciones recientes
          </h3>
        
        <div class="row">
          <CartaPublicaciones />
        </div>
        <div class="row mt-md-4 mb-md-4">
          <Body />
          <SideBar />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
