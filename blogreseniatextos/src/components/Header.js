import React, { useDebugValue } from "react";
import "./styles/styles.css";
import banner from "./img/banner.jpg";

const Header = () => {
  return (
    <div id="containerHeader" class="mb-md-4">
      <div class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active d-flex justify-content-center">
            <img id="imagenCielo" src={banner} class="d-block" />
          </div>
        </div>
      </div>

      <div id="containerNavBar">
        <nav id="navBar" class="navbar navbar-expand-lg">
          <div class="container-fluid ">
            <ul>
              <li class="text-center d-flex justify-content-center align-items-center">
            <a
              class="navbar-brand ms-5"
              href="/"
            >
              <b>LaD</b>
            </a>
            </li>
            </ul>
            <div
              class="collapse navbar-collapse ms-4 container"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav">
                <li class="nav-item text-center">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/Publicaciones"
                  >
                    Ingresa tu publicación
                  </a>
                </li>
                <li class="nav-item  ms-4 d-flex align-items-center">
                  <a class="nav-link" href="#">
                    Recursos
                  </a>
                </li>
                <li class="nav-item dropdown ms-4 d-flex align-items-center">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categorías
                  </a>
                  <ul class="dropdown-menu ms-4">
                    <li>
                      <a class="dropdown-item" href="#">
                        Libros
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Películas
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Anime
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form id="formNavBar" role="search">
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
