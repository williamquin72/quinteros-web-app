import React from "react";
import './About.css'
import IMGABOUT from '../../assets/About Img.jpg'
import IMGABOUT01 from '../../assets/About Img 2.jpg'

const About = () => {
    return (
        <div className="About">
            <div className="About-Left01">
            <img src={IMGABOUT} alt="" />

            </div>
            <div className="About-Left02">
                <img src={IMGABOUT01} alt="" />
            </div>
            <div className="About-Right">

            </div>

        </div>
    )
}
export default About