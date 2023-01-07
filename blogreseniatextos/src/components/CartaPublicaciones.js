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
        <div class="col-4 d-flex justify-content-evenly" id="divCartas">
          <div id="cartas" class="card mb-md-4 mt-md-3" key={post.id}>
            <div class="row g-0">
              <div class="col-md-5">
                <img
                  id="imagenCartas"
                  src={post.urlImagen}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="col-md-6 mt-md-1">
                <div>
                  <h5 class="class-title text-center ms-md-5">{post.titulo}</h5>
                  <p class="card-body" id="cuerpoCartas">
                    {post.cuerpo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
}
