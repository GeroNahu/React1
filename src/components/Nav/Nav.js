import React from 'react';
import Button from './NavLinks/ButtonComponent'
import Icono from '../../imagenes/IconoBars.png'
import './styles/navStyles.css'
// import ButtonClass from '../Nav/NavLinks/ButtonClass'
// onClick={()=>ButtonClass(click)}
// let click = false
const Nav = ()=> {
    return(
        <nav className="nav">
            <button className="buttonMenu"><img className="iconoBars" src={Icono} alt="Menú" /></button>
            <Button
    todosLosDatos = 'INFORMACIÓN COMPLETA'
    datosPersonales = 'DATOS PERSONALES'
    educacion = 'EDUCACIÓN'
    experienciaLaboral = 'EXPERIENCIA LABORAL'
    certificacion = 'CERTIFICACIÓN'
    contacto = 'CONTACTO'
/>
        </nav>
    )
};
export default Nav;
