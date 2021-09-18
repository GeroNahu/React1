import React from "react";
import DatosPersonales from "./DatosPersonales";
import ExperiencaLaboral from "./ExperiencaLaboral";
import Educacion from "./Educacion";
import Certificacion from "./Certificacion";
import Contacto from "./Contacto";

class TodosLosDatos extends React.Component {
  render(){
    return(
      <ul className="container">
        <h4 className="subtitulos">Datos Personales</h4>
        <li><DatosPersonales /></li>
        <h4 className="subtitulos">Experiencia Laboral</h4>
        <li><ExperiencaLaboral /></li>
        <h4 className="subtitulos">Educación</h4>
        <li><Educacion /></li>
        <h4 className="subtitulos">Contacto</h4>
        <li><Contacto /></li>
        <h4 className="subtitulos">Certificación</h4>
        <li><Certificacion /></li>
      </ul>
    )
  }
}

export default TodosLosDatos