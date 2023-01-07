import React from "react";
/* import { useNavigate } from "react-router-dom"; */
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartaPublicaciones from "../components/CartaPublicaciones";
import SideBar from "../components/SideBar";
import Body from "../components/Body";

/* import Top from "../components/Top"; */

const Homepage = () => {
  /* const navigate = useNavigate();  */

  return (
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
  );
};

export default Homepage;
