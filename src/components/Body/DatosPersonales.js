import React from "react";

class DatosPersonales extends React.Component {
  render(){
    const
      nombre = 'Andrada Cabanillas, Gerónimo Nahuel',
      dni = '********',
      edad = '31',
      estadoCivil = 'Soltero',
      nacimiento = 'Córdoba, 14 de abril de 1990',
      domicilio = '******* ***** *** ** ***'

    return(
      <ul className="container">
        <li className="items"><label className="label">NOMBRE:</label><p className="dato">{nombre}</p></li>
        <li className="items"><label className="label">D.N.I:</label><p className="dato">{dni}</p></li>
        <li className="items"><label className="label">EDAD:</label><p className="dato">{edad}</p></li>
        <li className="items"><label className="label">ESTADO CIVIL:</label><p className="dato">{estadoCivil}</p></li>
        <li className="items"><label className="label">NACIMIENTO:</label><p className="dato">{nacimiento}</p></li>
        <li className="items"><label className="label">DOMICILIO:</label><p className="dato">{domicilio}</p></li>
      </ul>
    )
  }
}

export default DatosPersonales
