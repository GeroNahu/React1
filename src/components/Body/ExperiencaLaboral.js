import React from "react";

class ExperiencaLaboral extends React.Component {
  render(){
    const
      puesto1 = 'Ayudante de cátedra – Trabajo en el laboratorio de química general e inorgánica',
      duracion1 = '06/2017 – Actualidad',
      puesto2 = 'Ayudante en el dictado de clases de la materia y ayudante en el dictado de clases del cursillo de ingreso 2018',
      puesto3 = 'Colaborador en el trabajo de investigación Mercadal P.A., Mignone R.A., Ortiz A., Hernández J.F., Andrada G., Ramos J.M., Campitelli P. (2019) Influencia de la dosis de aplicación de residuo pecuario estabilizado en la calidad fisicoquímica de un suelo durante el cultivo de maíz “jornada  integrada de investigación extensión y enseñanza de la facultad de ciencias agropecuarias”, vol VIII, p 132.',
      duracion3 = '06/2018 – 06/2019',
      puesto4 = 'Tareas de operario – uso de maquinaria especializada para la fragmentación de papel, mantenimiento ligero, soldadura en hierro, estaño, tornería y carpintería.',
      puesto4b = 'Tareas administrativas – Encargado de RRHH, y control de stock',
      duracion4 = '04/2006 – 06/2014',
      referencia4 = '+54 (0351) 4899485 (Martín Cabanillas)',
      puesto5 = 'Operador telefónico para la cuenta de EDESUR.',
      duracion5 = '12/2015 – 04/2016 (contrato por temporada)'

    return(
      <ul className="container">
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">EMPRESA:</label><p className="dato">FCA-UNC</p></li>
              <li className="items2"><label className="label">PUESTO:</label><p className="dato">{puesto1}</p></li>
              <li className="items2"><label className="label">DURACIÓN:</label><p className="dato">{duracion1}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">EMPRESA:</label><p className="dato">FCA-UNC</p></li>
              <li className="items2"><label className="label">PUESTO:</label><p className="dato">{puesto2}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">EMPRESA:</label><p className="dato">FCA-UNC</p></li>
              <li className="items2"><label className="label">PUESTO:</label><p className="dato">{puesto3}</p></li>
              <li className="items2"><label className="label">DURACIÓN:</label><p className="dato">{duracion3}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">EMPRESA:</label><p className="dato">La Quebrada Servicios / Alnes.</p></li>
              <li className="items2"><label className="label">PUESTO:</label><p className="dato">{puesto4}</p></li>
              <li className="items2"><label className="label">PUESTO:</label><p className="dato">{puesto4b}</p></li>
              <li className="items2"><label className="label">DURACIÓN:</label><p className="dato">{duracion4}</p></li>
              <li className="items2"><label className="label">REFERENCIA:</label><p className="dato">{referencia4}</p></li>
            </ul>
          </li>
          <li className="items">
            <ul className="ulContainer">
              <li className="items2"><label className="label">EMPRESA:</label><p className="dato">ATENTO</p></li>
              <li className="items2"><label className="label">PUESTO:</label><p className="dato">{puesto5}</p></li>
              <li className="items2"><label className="label">DURACIÓN:</label><p className="dato">{duracion5}</p></li>
            </ul>
          </li>
      </ul>
    )
  }
}

export default ExperiencaLaboral