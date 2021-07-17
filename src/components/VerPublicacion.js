import React from "react";
import { useDispatch, useSelector } from "react-redux";

const VerPublicacion = () => {
  //publicacion que traere de mi store
  const publicacion = useSelector(
    (state) => state.publicaciones.publicacionobtener
  );
  //Hago destructuring
  const { id, nombre, duracion, link, idTipo } =
    publicacion;
  console.log(publicacion);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card border-light mb-3">
            <div className="card-header">
              <h4 className="card-title text-center">{nombre}</h4>
            </div>
            <div className="card-body">
             {/* <img src={imagen} className="img-fluid" />*/}
            </div>
          </div>
        </div>
        <div className="col-6">
          <div class="card text-white bg-primary mb-3">
            <div class="card-header">Información</div>
            <div class="card-body">
              <h5>Nombre Pelicula:</h5>
              <p class="card-text">{nombre}</p>
              <h5>Duracion:</h5>
              <p class="card-text">{duracion}</p>
              <p>
                Link para verla:<strong>{link}</strong>
              </p>
               <h5>Categoria:</h5>
              <p class="card-text">{idTipo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerPublicacion;
