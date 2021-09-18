import React from "react";

class ExperiencaLaboral extends React.Component {
  render(){
    const
      estado1a = 'Completo',
      estado1b = ' Cursado en IPEM 266 Colegio Dean Gregorio Funes',
      estado1c = 'IPEM 266 Colegio Dean Gregorio Funes',
      estado2a = 'En curso',
      estado2b = 'Facultad de Ciencias Agronómicas, Universidad Nacional de Córdoba',
      estado2c = 'Ingeniería Agronómica. Año de ingreso 2017',
      estado3b = 'Univercidad Tecnológica Nacional',
      estado3c = 'Operador de PC',
      estado4b = 'Univercidad Tecnológica Nacional',
      estado4c = 'Microsoft Office e internet',
      estado5b = 'Univercidad Tecnológica Nacional',
      estado5c = 'Curso de redes',
      estado6b = 'Universidad Nacional de Córdoba',
      estado6c = 'Mi Propio Jardín',
      estado7b = 'Universidad Nacional de Córdoba',
      estado7c = 'Mi Propia Huerta',
      estado8b = 'Universidad Nacional de Córdoba',
      estado8c = 'Matemática elemental para futuros diseñadores y arquitectos',
      estado9b = 'Dalto',
      estado9c = 'HTML5',
      estado10c = 'CSS',
      estado11c = 'JavaScript Junior level',
      estado12c = 'JavaScript Mid level',
      estado13c = 'JavaScript Master level',
      estado14b = 'Raúl Palacios',
      estado14c = 'React.js',
      estado15c = 'Consejos y técnicas para elaborar compost y lombricompuesto domiciliario',
      charla1 = 'Cervecería artesanal',
      charla2 = 'Consejos y técnicas para elaborar compost y lombricompuesto domiciliario',
      charla3 = 'Formador de formadores',
      charla4 = 'Jornada picado y ensilado de maíz',
      charla5 = '3º jornada del departamento de producción animal',
      charla6 = 'Viaje a la estación experimental INTA manfredi',
      charla7 = 'Vitivinicultura De Córdoba',
      charla8 = 'Vitivinicultura Del viñedo al vino',
      charla9 = 'Agroecología extensiva',
      charla10 = 'Rumiante menores',
      charla11 = '2da jornada de bovino criollo',
      charla12 = 'Ganadería climáticamente inteligente',
      charla13 = 'Ganadería regenerativa'

    return(
      <ul className="container">
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">NIVEL SECUNDARIO:</label><p className="dato">{estado1a}</p></li>
              <li className="items2"><label className="label">INSTITUCIÓN:</label><p className="dato">{estado1b}</p></li>
              <li className="items2"><label className="label">ESPECIALIDAD:</label><p className="dato">{estado1c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">NIVEL UNIVERSITARIO:</label><p className="dato">{estado2a}</p></li>
              <li className="items2"><label className="label">INSTITUCIÓN:</label><p className="dato">{estado2b}</p></li>
              <li className="items2"><label className="label">CARRERA:</label><p className="dato">{estado2c}</p></li>
            </ul>
          </li>
              <h5 className="subtitulosEdu">Cursos:</h5>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">INSTITUCIÓN:</label><p className="dato">{estado3b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado3c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">INSTITUCIÓN:</label><p className="dato">{estado4b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado4c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">INSTITUCIÓN:</label><p className="dato">{estado5b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado5c}</p></li>
            </ul>
          </li>
          <h5 className="subtitulosEdu">Cursos Online:</h5>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">INSTITUCIÓN:</label><p className="dato">{estado6b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado6c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">INSTITUCIÓN:</label><p className="dato">{estado7b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado7c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">INSTITUCIÓN:</label><p className="dato">{estado7b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado15c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">INSTITUCIÓN:</label><p className="dato">{estado8b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado8c}</p></li>
            </ul>
          </li>
          <h5 className="subtitulosEdu">Cursos en Youtube:</h5>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">YOUTUBER:</label><p className="dato">{estado9b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado9c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">YOUTUBER:</label><p className="dato">{estado9b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado10c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">YOUTUBER:</label><p className="dato">{estado9b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado11c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">YOUTUBER:</label><p className="dato">{estado9b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado12c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">YOUTUBER:</label><p className="dato">{estado9b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado13c}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">YOUTUBER:</label><p className="dato">{estado14b}</p></li>
              <li className="items2"><label className="label">CURSO:</label><p className="dato">{estado14c}</p></li>
            </ul>
          </li>
          <h5 className="subtitulosEdu">Agro Conferencias:</h5>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">INSTITUCIÓN:</label><p className="dato">{estado8b}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla1}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla2}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla3}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla4}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla5}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla6}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla7}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla8}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla9}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla10}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla11}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla12}</p></li>
              <li className="items2"><label className="label">TEMA:</label><p className="dato">{charla13}</p></li>
            </ul>
          </li>
      </ul>
    )
  }
}

export default ExperiencaLaboral