import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/About/j2.png"

import { Link } from "react-router-dom";

const HeroImg = () => {
return ( 
<div className="hero">
<div className="mask">
    <img className="into-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>HI, soy Gastón Ibañez</p>
        <h1>Desarrollador Web.</h1>
        <div>
            <Link to="/Project" className="btn">Proyectos</Link>
            <Link to="/About" className="btn btn-light">Sobre mí</Link>
        </div>
    </div>
</div>
);
};
export default HeroImg;