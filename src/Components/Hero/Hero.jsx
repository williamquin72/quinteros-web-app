import React from "react";
import './Hero.css'
import Flecha_derecha from '../../assets/Flecha-derecha.png'
const Hero = () => {
    return (
        <div className="Hero-Cont">
            <div className="Hero-Text">
            <h1></h1>
            <p>En Quinter-OS, nos especializamos en servicios técnicos integrales para empresas y particulares, ofreciendo soluciones tanto en hardware como en software. Nuestra experiencia nos permite garantizar la eficiencia y fiabilidad en cada proyecto que emprendemos.</p>
            <button className="btn">Empecemos <img src={Flecha_derecha} alt="" /></button>
            </div>


        </div>
    )
}
export default Hero