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
        <div class="row">
          <CartaPublicaciones />
        </div>
        <div class="row">
          <Body />
          <SideBar />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
