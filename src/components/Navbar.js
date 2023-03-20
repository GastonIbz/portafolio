import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {

    const [OpenClick, setClick] = useState(false);
    const handleClick = () => setClick (!OpenClick);
    const [color, setColor] = useState(false);

const changeColor = () => {
        if ( window.scrollY >=80){
            setColor(true);
        } else {
setColor(false);
        }
    };
window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}> 
    <Link to="/">
        <h1>  Portafolio  </h1>
    </Link>
    <ul className={OpenClick ? "nav-menu active": "nav-menu"}>
        <li>
            <Link to="/">Inicio</Link>
        </li>
        <li>
            <Link to="/Herramientas">Herramientas</Link>
        </li>
        <li>
            <Link to="/About">Sobre mi</Link>
        </li>
        <li>
            <Link to="/Contact">Contacto</Link>
        </li>
    </ul>
    <div className="hamburguer" onClick={handleClick}>
        {OpenClick ? ( <FaTimes size={30} style={{color: "#fff" } }/>) : (<FaBars size={30} style={{color: "#ce293cb9" } }/>)}
    </div>   
    </div>
  );
};

export default Navbar;