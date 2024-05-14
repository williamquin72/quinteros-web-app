import React from "react";
import './Hero.css'
import Flecha_derecha from '../../assets/Flecha-derecha.png'
const Hero = () => {
    return (
        <div className="Hero-Cont">
            <div className="Hero-Text">
            <h1>aqui va un tiutlo 1</h1>
            <p>aqui va un parrafo</p>
            <button className="btn">este es un boton <img src={Flecha_derecha} alt="" /></button>
            </div>


        </div>
    )
}
export default Hero