import React from "react";

const Contacto = ()=>{
    const
    linkedin = 'https://www.linkedin.com/in/geronimo-andrada/',
        mail = 'geronimo.andrada.811@unc.edu.ar'
    return(
    <ul className="container">
        <li className="items"><label className="label">LINKEDIN:</label><p className="dato">{linkedin}</p></li>
        <li className="items"><label className="label">E-MAIL:</label><p className="dato">{mail}</p></li>
    </ul>
    )
}

export default Contacto
