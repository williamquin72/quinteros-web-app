import React from "react"
import './programs.css'
import SWSU from '../../assets/SWSU.jpg'
import HWSU from '../../assets/HWSU.jpg'
import SU from '../../assets/SU.jpg'
const Programs = () => {
    return(
        <div className="ProgramsCont">
            <div className="ProgramsContSub">
                <img src={SWSU} alt="" />
                <div className="caption">
                    <img src="" alt="" />
                    <p></p>
                </div>
            </div>
            <div className="ProgramsContSub">
                <img src={HWSU} alt="" />
            </div>
            <div className="ProgramsContSub">
                <img src={SU} alt="" />
            </div>
        </div>
    )
}
export default Programs