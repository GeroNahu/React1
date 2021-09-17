import React from "react";

const Contacto = ()=>{
    const
        telefono = '+54-0351-15 75*****',
        mail = 'geronimo.andrada.811@unc.edu.ar'
    return(
    <ul className="container">
        <li className="items"><label className="label">TELÉFONO:</label><p className="dato">{telefono}</p></li>
        <li className="items"><label className="label">E-MAIL:</label><p className="dato">{mail}</p></li>
    </ul>
    )
}

export default Contacto
