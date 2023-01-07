import React from "react";

const TablaPublicaciones = ({ publicacion, deletePost, setPostEditado }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Titulo</th>
            <th scope="col">Cuerpo</th>
            <th scope="col">Fecha</th>
            <th scope="col">URL imagen</th>
            <th scope="col">Nombre imagen</th>
          </tr>
        </thead>
        <tbody>
          {publicacion.map((publicacion) => (
            <tr>
              <td>{publicacion.id}</td>
              <td>{publicacion.titulo}</td>
              <td>{publicacion.cuerpo}</td>
              <td>{publicacion.fecha}</td>
              <td>{publicacion.urlImagen}</td>
              <td>{publicacion.nombreImagen}</td>

              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    deletePost(publicacion.id);
                  }}
                >
                  {" "}
                  Eliminar{" "}
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setPostEditado(publicacion);
                  }}
                >
                  {" "}
                  Editar{" "}
                </button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </div>
  );
};

export default TablaPublicaciones;
