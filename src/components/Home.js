import React, { Component } from "react";
import Login from "./Login"
//import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="home">
            <section>
              <div>
                <div className="container text-center py-5">
                  <h1 className="display-4">Bienvenido a Peliculas</h1>
                  <p className="lead">
                    Este es un lugar para publicar las peliculas que mas te gustan con otras personas,
                     y tambien podras encontrar muchas peliculas para ver que que otros han compartido
                  </p>
                  <hr />
                  
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="col-6">
          <Login/>
        </div>
      </div>
    );
  }
}
