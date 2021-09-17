import React from "react";
import certificado1 from '../../imagenes/Diploma.jpg'
import certificado2 from '../../imagenes/miPropioJardin.png'
import certificado3 from '../../imagenes/MiPropiaHuerta.png'
import certificado4 from '../../imagenes/matematicaElemental.png'
import certificado5 from '../../imagenes/Cervezería artesanal.jpg'
import certificado6 from '../../imagenes/Compost.png'
import certificado7 from '../../imagenes/Formador de formadores.jpg'
import certificado8 from '../../imagenes/picado.png'
import certificado9 from '../../imagenes/3º jornada del departamento de producción animal.png'
import certificado10 from '../../imagenes/Viaje a la estacion experimental INTA manfredi.jpg'
import certificado11 from '../../imagenes/Vitivinicultura De Córdoba.png'
import certificado12 from '../../imagenes/Vitivinicultura Del viñedo al vino.png'
import certificado13 from '../../imagenes/Agroecología extensiva.png'
import certificado14 from '../../imagenes/II jornada ganado bobino criollo.png'
// import certificado from '../../imagenes/'

const Certificacion = ()=>{
    return(
        <div className="certificadoContainer">
            <img src={certificado1} alt="Diploma de Secundario" className="certificados"/>
            <img src={certificado2} alt="certificado Mi Propio Jardín" className="certificados"/>
            <img src={certificado3} alt="certificado Mi Propia Huerta" className="certificados"/>
            <img src={certificado4} alt="certificado Matemática Elemental para Arquitectos e Ingenieros" className="certificados"/>
            <img src={certificado5} alt="certificado cervezería artesanal" className="certificados"/>
            <img src={certificado6} alt="certificado Consejos y técnicas para elaborar compost y lombricompuesto domiciliario" className="certificados"/>
            <img src={certificado7} alt="certificado Formador de formadores" className="certificados"/>
            <img src={certificado8} alt="certificado Jornada picado y ensilado de maíz" className="certificados"/>
            <img src={certificado9} alt="certificado 3º jornada del departamento de producción animal" className="certificados"/>
            <img src={certificado10} alt="certificado Viaje a la estación experimental INTA manfredi" className="certificados"/>
            <img src={certificado11} alt="certificado Vitivinicultura De Córdoba" className="certificados"/>
            <img src={certificado12} alt="certificado Vitivinicultura Del viñedo al vino" className="certificados"/>
            <img src={certificado13} alt="certificado Agroecología extensiva" className="certificados"/>
            <img src={certificado14} alt="certificado II jornada ganado bobino criollo" className="certificados"/>

            {/*<img src={certificado} alt="certificado " className="certificados"/> */}
        </div>
    )
}

export default Certificacion