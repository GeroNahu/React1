import React from "react";
import fotoCarnet from '../../imagenes/fotoCarnet.png'

class Body extends React.Component {
    render(){
        return(
        <>
            <h1 className="titulo">Curriculum Vitae</h1>
            <div>
                <img src={fotoCarnet} alt="Profile" className="img"/>
            </div>
            {this.props.children}
        </>
        )
    }
}

export default Body