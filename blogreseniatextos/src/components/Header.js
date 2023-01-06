import React, { useDebugValue } from "react";
import "./styles/styles.css";
import banner from "./img/banner.jpg";

const Header = () => {
  return (
    <div id="containerHeader">
      <div class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active d-flex justify-content-center">
            <img id="imagenCielo" src={banner} class="d-block" />
          </div>
        </div>
      </div>

      <div id="containerNavBar">
        <nav id="navBar" class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand  ms-5" href="#">
              <b>LaD</b>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse ms-4 container"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    PUBLICACIONES
                  </a>
                </li>
                <li class="nav-item  ms-4">
                  <a class="nav-link" href="#">
                    RECURSOS
                  </a>
                </li>
                <li class="nav-item dropdown ms-4">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    CATEGORÍAS
                  </a>
                  <ul class="dropdown-menu ms-4">
                    <li>
                      <a class="dropdown-item" href="#">
                        LIBROS
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        PELÍCULAS
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        ANIME
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form id="formNavBar" class="d-flex container" role="search">
                <input
                  id="inputNavBar"
                  class="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button
                  id="botonNavBar"
                  class="btn btn-outline-success"
                  type="Enviar"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
