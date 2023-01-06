import axios from "axios";
import React, { useEffect, useState } from "react";

export function CartaPublicaciones() {
  const url2 = "http://localhost:8080/allPost";

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${url2}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return "no hay posts:(";

  return post
    .slice(Math.max(post.length - 3, 1))
    .sort((a, b) => {
      return b.id - a.id;
    })
    .map((post) => {
      return (
        <div class="col" id="displayPublicaciones">
          <div id="cartas" class="card " key={post.id}>
            <img id="imagenCartas" src={post.urlImagen} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>{post.titulo}</h5>
              <p class="text-truncate">{post.cuerpo}</p>
            </div>
          </div>
        </div>
      );
    });
}
