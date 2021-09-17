import React from "react";
import DatosPersonales from "./DatosPersonales";
import ExperiencaLaboral from "./ExperiencaLaboral";
import Educacion from "./Educacion";
import Certificacion from "./Certificacion";
import Contacto from "./Contacto";

class TodosLosDatos extends React.Component {
  render(){
    const
      nombre = 'Andrada Cabanillas, Gerónimo Nahuel',
      dni = '35523981',
      edad = '31',
      estadoCivil = 'Soltero',
      nacimiento = 'Córdoba, 14 de abril de 1990',
      domicilio = 'León Schneider 3921, Barrio Kennedy',
      telefono = '+54-0351-15 7598524',
      mail = 'geronimo.andrada.811@unc.edu.ar',
      carnet = 'Categoría particular A2,1 - vto 13/06/2023 / Categoría moto B2 - vto 13/06/2023'

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