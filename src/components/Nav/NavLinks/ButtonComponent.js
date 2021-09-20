import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {

    render(){
        const { datosPersonales, educacion, experienciaLaboral, certificacion, contacto, todosLosDatos, esVisible, ocultarMenu } = this.props;
        return (
            <div onClick={ocultarMenu} className={`buttonContainer ${esVisible? 'visible': 'oculto'}`}>
                <Link to="/infocompleta" className={"navButtom"}>{todosLosDatos}</Link>
                <Link to="/datosPersonales" className="navButtom">{datosPersonales}</Link>
                <Link to="/experienciaLaboral" className="navButtom">{experienciaLaboral}</Link>
                <Link to="/educacion" className="navButtom">{educacion}</Link>
                <Link to="/certificacion" className="navButtom">{certificacion}</Link>
                <Link to="/contacto" className="navButtom">{contacto}</Link>
            </div>
        )
    }
}

export default Button
