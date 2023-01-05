import React, { useEffect, useState } from "react";

const initialPost = {
    id: "",
    titulo: "",
    cuerpo: "",
    fecha: "",
    tipo: "",
    nombre: "",
    imageData: ""
}

const InputPublicacion = ({ postAdd, postEditado, setPostEditado, postEdit }) => {

    const [publicacion, setPublicacion] = useState(initialPost);
    const { id, titulo, cuerpo, fecha, tipo, nombre, imageData } = publicacion;

    useEffect(() => {
        if (postEditado !== null) {
            setPublicacion(postEditado);
        } else {
            setPublicacion({
                id: "",
                titulo: "",
                cuerpo: "",
                fecha: "",
                tipo: "",
                nombre: "",
                imageData: ""
            });
        }
    }, [postEditado])

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...publicacion,
            [e.target.name]: e.target.value,
        }
        setPublicacion(changedFormValue);
    }


    return (

        <div>
            <form>
                {postEditado !== null ? <h1>Editar usuario</h1> : <h1>Ingrese usuario</h1>}

                <label>ID</label>
                <input
                    type="text"
                    class="form-control"
                    name="id"
                    value={id}
                    onChange={handleInputChange}
                    disabled />


                <label>Titulo</label>
                <input
                    type="text"

                    class="form-control"
                    name="titulo"
                    value={titulo}
                    onChange={handleInputChange} />


                <label>Cuerpo</label>
                <input
                    type="text"
                    class="form-control"
                    name="cuerpo"
                    value={cuerpo}
                    onChange={handleInputChange} />


                <label>Fecha</label>
                <input
                    class="form-control"
                    type="text"
                    name="fecha"
                    value={fecha}
                    onChange={handleInputChange} />

                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>

                <label>Nombre Imagen</label>
                <input
                class="form-control"
                type="text"
                name="nombre"
                value={nombre}
                onChange={handleInputChange}/>




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