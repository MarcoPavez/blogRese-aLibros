import React, { useEffect, useState } from "react";

const initialPost = {
  id: "",
  titulo: "",
  cuerpo: "",
  fecha: "",
  nombreImagen: "",
  urlImagen: "",
};

const InputPublicacion = ({
  postAdd,
  postEditado,
  setPostEditado,
  postEdit,
}) => {
  const [publicacion, setPublicacion] = useState(initialPost);
  const { id, titulo, cuerpo, fecha, nombreImagen, urlImagen } = publicacion;

  useEffect(() => {
    if (postEditado !== null) {
      setPublicacion(postEditado);
    } else {
      setPublicacion({
        id: "",
        titulo: "",
        cuerpo: "",
        fecha: "",
        nombreImagen: "",
        urlImagen: "",
      });
    }
  }, [postEditado]);

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...publicacion,
      [e.target.name]: e.target.value,
    };
    setPublicacion(changedFormValue);
  };

  return (
    <div>
      <form>
        <h1>Ingresa tu publicación</h1>
        <h3>¡Gracias! Nos alegra que eligas usar nuestra plataforma c:</h3>

        <input
          type="text"
          class="form-control"
          name="id"
          value={id}
          onChange={handleInputChange}
          disabled
          hidden
        />

        <label>Titulo</label>
        <input
          type="text"
          class="form-control"
          name="titulo"
          value={titulo}
          onChange={handleInputChange}
          required
        />

        <label>Cuerpo</label>
        <input
          type="text"
          class="form-control"
          name="cuerpo"
          value={cuerpo}
          onChange={handleInputChange}
          required
        />

        <label>Fecha</label>
        <input
          class="form-control"
          type="date"
          name="fecha"
          value={fecha}
          onChange={handleInputChange}
          required
        />

        <div class="mb-3">
          <label for="formFile" class="form-label">
            Ingresa URL de la imagen
          </label>
          <span>
            <em>
              {" "}
              <br />
              Ingresando la URL de la imagen, nos ayudas a reducir el consumo de
              memoria en nuestros servidores
            </em>
          </span>
          <input
            placeholder="Podrías utilizar plataformas como Imgur ;)"
            class="form-control"
            type="text"
            id="formFile"
            name="urlImagen"
            value={urlImagen}
            onChange={handleInputChange}
            required
          />
        </div>

        <label>¡Dale un nombre a tu imagen!</label>
        <input
          class="form-control"
          type="text"
          name="nombreImagen"
          value={nombreImagen}
          onChange={handleInputChange}
          required
        />

        <div class="d-md-flex justify-content-md-center">
          {postEditado !== null ? (
            <button
              type="button"
              class="btn btn-success"
              onClick={() => postEdit(publicacion)}
            >
              Editar publicacion
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-success"
              onClick={() => postAdd(publicacion)}
            >
              Ingresar publicacion
            </button>
          )}
          {postEditado !== null ? (
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => setPostEditado(null)}
            >
              Cancelar
            </button>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default InputPublicacion;
