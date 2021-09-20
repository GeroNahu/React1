import React, { useState } from 'react';
import Button from './NavLinks/ButtonComponent'
import Icono from '../../imagenes/IconoBars.png'
import './styles/navStyles.css'
// onClick={()=>ButtonClass(click)}
// let click = false
const Nav = ()=> {
    const [ state, setState ] = useState({
        esVisible: false
    })
    const cambiaVisibilidad =()=> {
        setState({
            esVisible: !state.esVisible
        })
    }
    const ocultaMenu =()=> {
        setState({
            esVisible: false
        })
    }
    return(
        <nav className="nav">
            <button className="buttonMenu" onClick={cambiaVisibilidad}><img className="iconoBars" src={Icono} alt="Menú" /></button>
            <Button
                todosLosDatos = 'INFORMACIÓN COMPLETA'
                datosPersonales = 'DATOS PERSONALES'
                educacion = 'EDUCACIÓN'
                experienciaLaboral = 'EXPERIENCIA LABORAL'
                certificacion = 'CERTIFICACIÓN'
                contacto = 'CONTACTO'
                esVisible = {state.esVisible}
                ocultarMenu = {ocultaMenu}
            />
        </nav>
    )
};
export default Nav;
