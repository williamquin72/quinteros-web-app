import React from "react"
import './programs.css'
import SWSU from '../../assets/SWSU.jpg'
import HWSU from '../../assets/HWSU.jpg'
import SU from '../../assets/SU.jpg'
import iconHWSU from '../../assets/icono pctransparente.png'
import iconSWSU from '../../assets/icono mundo transparente.png'
import iconSU from '../../assets/icono pctransparente.png'

const Programs = () => {
    return(
        <div className="ProgramsCont">
            <div className="ProgramsContSub">
                <img src={SWSU} alt="" />
                <div className="caption">
                    <img src={iconSWSU} alt="" />
                    <p>Software</p>
                </div>
            </div>
            <div className="ProgramsContSub">
                <img src={HWSU} alt="" />
                <div className="caption">
                    <img src={iconHWSU} alt="" />
                    <p>Hardware</p>
                </div>
            </div>
            <div className="ProgramsContSub">
                <img src={SU} alt="" />
                <div className="caption">
                    <img src={iconSU} alt="" />
                    <p>Soporte general</p>
                </div>
            </div>
        </div>
    )
}
export default Programs