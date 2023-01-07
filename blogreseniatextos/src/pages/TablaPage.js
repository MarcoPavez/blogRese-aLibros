import React, { useEffect, useState } from "react";
import InputPublicacion from "../components/InputPublicacion";
import TablaPublicaciones from "../components/TablaPublicaciones";
import {
  addPost,
  deletePost,
  getAllPosts,
  editPost,
} from "../services/PublicacionService";
import Header from "../components/Header";
import Footer from "../components/Footer";

const publicacion = [
  {
    id: 1,
    titulo: "Reseña Demian",
    cuerpo:
      " Desde que era niño, Sinclair tiene una teoría: existen dos mundos, aunque ambos conviven sin llegar a tocarse. Está el bueno, al que pertenecen los abrazos de su madre, las sábanas limpias y los juegos con sus hermanas, y el malo, el de los callejones, los criminales y las mujeres que esperan en ciertas esquinas. Sinclair ha crecido en el mundo bueno, pero siente una inconfesable atracción hacia todo lo que sucede en las sombras. Desde que mató a su hermano, Caín tiene una marca: señala su pecado y hace que todos los hombres le teman. Eso dice la Biblia. Pero, ¿y si Caín no hizo nada malo? ¿Y si los demás hombres le odiaban porque era mejor que ellos y se inventaron su crimen para no sentirse unos cobardes por temerle? Lo distinto siempre ha inspirado rechazo en los mediocres. Eso dice Max Demian, el chico nuevo. Sus palabras rozan lo blasfemo, pertenecen a ese otro mundo oscuro y prohibido que tanto seduce a Sinclair. La tranquila existencia de Demian es un desafío en sí misma, a los profesores, al mundo bueno, ¡al propio Dios! Al menos, al dios de la Biblia. Demian cree en otra divinidad, una que lleva por nombre Abraxas y que aúna esas dos realidades en las que siempre ha creído Sinclair: Abraxas es, a la vez, la virtud y el pecado. Demian es lo que se llama una «historia de formación»: Sinclair no es más que un niño que deja de serlo con el paso del tiempo y que, entretanto, busca su lugar en el mundo. Su problema es que ni siquiera sabe en qué mundo quiere vivir. ¿Pertenece al de la luz o al de la oscuridad? ¿Sirve de algo decidirse por uno o por otro? Más que en la trama, es en la mente de Sinclair donde reside la complejidad de Demian. Su cabeza es un laberinto de ideas que puede llegar a resultar mareante. ¿Qué es simbólico? ¿Qué es literal? No nos corresponde a nosotros decirlo. Lo importante es que, sin duda, esta novela te dará qué pensar.",
    fecha: "1998-06-03",
    tipo: "png",
    nombre: "foto_demian",
    imageData: "",
  },
];

const TablaPublicacionesPage = () => {
  const [post, setPost] = useState(publicacion);
  const [postEditado, setPostEditado] = useState(null);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const postBD = await getAllPosts();
    setPost(postBD);
  };

  const postAdd = async (postAgregado) => {
    const postBD = await addPost(postAgregado);
    getPost();
  };

  const postEdit = async (postEditado) => {
    const postBD = await editPost(postEditado);
    getPost();
  };

  const postDelete = async (idPost) => {
    const postBD = await deletePost(idPost);
    getPost();
  };

  return (
    <div class="container">
      <Header />
      <h1><strong>ESTA PÁGINA SÓLO DEBE SER VISTA POR EL ADMINISTRADOR, ES ALTAMENTE PELIGROSA EN LA MEDIDA QUE PUEDE ELIMINAR TODAS LAS PUBLICACIONES DE LA PÁGINA</strong></h1>
      <InputPublicacion
        postAdd={postAdd}
        postEditado={postEditado}
        setPostEditado={setPostEditado}
        postEdit={postEdit}
      />
      <TablaPublicaciones
        publicacion={post}
        deletePost={postDelete}
        setPostEditado={setPostEditado}
      />
      <Footer />
    </div>
  );
};

export default TablaPublicacionesPage;