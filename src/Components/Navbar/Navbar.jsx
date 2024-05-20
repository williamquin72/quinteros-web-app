import React, { useState } from "react";
import './Navbar.css'
import logo from '../../assets/QUINTEROS2.png'
import iconmenu from '../../assets/menu.png'

const Navbar = () => {
    const [MobileMenu, SetMobileMenu] = useState(false);
    const ToggleEvent = () =>{
         MobileMenu ? SetMobileMenu(false) : SetMobileMenu(true);
    }
   return (
    <div className="NavbarContMain">

   <nav className="NavbarCont">
<img src={logo} alt=""  className="logo" />
<div className="NavbarContList"> 
<ul className={MobileMenu? '' : 'hide-mobile-menu'}>
    <li><button className="btn" >Inicio</button></li>
    <li><button className="btn">Nosotros</button></li>
    <li><button className='btn'>Acerca de</button></li>
    <li><button className="btn">Testimonios</button></li>
    <li><button className='btn'>Contactanos</button></li>
</ul>
<img src={iconmenu} alt="" className="menu-icon" onClick={ToggleEvent}/>
</div>

    </nav> 
    </div>  
    )
}
export default Navbar