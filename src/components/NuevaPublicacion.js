/*import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions de redux
import { crearNuevaPublicacionAction } from "../actions/publicacionActions";

//El history se tiene acceso cuando usamos react router dom
const NuevaPublicacion = ({ history }) => {
  //state del componente(Inicializo los componentes)
  const [id, setID] = useState("");
  const [nombre, setNombre] = useState("");
  const [duracion, setDuracion] = useState("");
  //const [imagen, setImagen] = useState("");
  const [categoria,setCategoria] = useState("");
  const [link, setLink] = useState(0);

  //Utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  //Acceder al state del store por medio de useSelector
  const cargando = useSelector((state) => state.publicaciones.loading);
  const error = useSelector((state) => state.publicaciones.error);

  //Ahora usaremos redux se creara una funcion de redux que llame el action
  //Llama el action de productoAction
  const agregarPublicacion = (publicacion) =>
    dispatch(crearNuevaPublicacionAction(publicacion));

  //Cuando el uaurio haga submit
  const submitNuevaPublicacion = (e) => {
    e.preventDefault();

    //Validar formulario
    if (id.trim() === "") {
      return;
    }
    //Valido para saber que imagen mandar
    let imagen = "";
    switch (categoria) {
        case "Tecnologia":
            imagen = "https://miro.medium.com/max/1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg"
            break;
        case "Hogar":
            imagen = "https://geeksroom.com/wp-content/uploads/2018/05/professional-services-home.jpg"
            break;
        case "Escolar/Universitario":
            imagen = "https://www.unir.net/wp-content/uploads/2021/04/la-universidad-que-necesitamos_c-2-1.jpg "
            break;
        default:
            imagen= "https://undefined.co.jp/img/og.png"
            break;
    }
    //Revisar errores

    //Crear el nuevo producto
    agregarPublicacion({
      id,
      nombre,
      duracion,
      link,
      categoria,
      
    });

    //Redirecciono al home o a la lista
    history.push("/publicaciones");
  }; 

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nueva Pelicula
            </h2>
            <form onSubmit={submitNuevaPublicacion}>
              <div className="form-group">
                <label>Nombre Pelicula</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Duracion</label>
                <input
                  type="text"
                  className="form-control"
                  name="duracion"
                  value={duracion}
                  onChange={(e) => setDuracion(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Link</label>
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Categoria</label>
                <select  className="form-control" name="idTipo"  value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                  <option></option>
                  <option>Terror</option>
                  <option>Accion</option>
                  <option >Ciencia Ficcion</option>
                  <option >Otro</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>

            {cargando ? <p>Cargando..</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-2 text-centern">
                {" "}
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevaPublicacion;*/


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTutorial } from "../actions/tutorials";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    nombre: "",
    duracion: "",
    link: "",
    idTipo: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = (e) => {
    e.preventDefault();
    const { id, nombre, duracion, link, idTipo } = tutorial;

    dispatch(createTutorial(id, nombre, duracion, link, idTipo))
      .then(data => {
        setTutorial({
          id: data.id,
          nombre: data.nombre,
          duracion: data.duracion,
          link: data.link,
          idTipo: data.idTipo,
          published: data.published
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (

    <div className="row justify-content-center text-center">
      <div className="col-md-8">
        <div className="card"></div>
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newTutorial}>
                Agregar Otra Pelicula
              </button>
            </div>
          ) : (
            <div>
              <form onSubmit={saveTutorial}>
                <div className="form-group">

                  <label htmlFor="title">Nombre Pelicula</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    minLength={5}
                    maxLength={50}
                    required="required"
                    value={tutorial.nombre}
                    onChange={handleInputChange}
                    name="nombre"
                  />

                </div>
                <div className="form-group">
                  <label htmlFor="description">Duracion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="duracion"
                    minLength={2}
                    maxLength={3}
                    required={true}
                    value={tutorial.duracion}
                    onChange={handleInputChange}
                    name="duracion"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="description">Link de acceso a la pelicula</label>
                  <input
                    type="text"
                    className="form-control"
                    id="link"
                    required={true}
                    value={tutorial.link}
                    onChange={handleInputChange}
                    name="link"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Categoria</label>
                  <input
                    type="text"
                    className="form-control"
                    id="idTipo"
                    minLength={1}
                    maxLength={15}
                    required={true}
                    value={tutorial.idTipo}
                    onChange={handleInputChange}
                    name="idTipo"
                  />
                </div>
                <button  className="btn btn-success" type="submit">
                  Submit
                </button>
              </form>



            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTutorial;