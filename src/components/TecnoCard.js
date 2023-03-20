import "./TecnoCardStyles.css";

import React from 'react'
import html from "../assets/Tenologias/html.png";
import css from "../assets/Tenologias/css.png";
import js from "../assets/Tenologias/js.png";
import react from "../assets/Tenologias/react.png";
import git from "../assets/Tenologias/Git.png";
import Github from "../assets/Tenologias/Github.png";
import Illustraitor from "../assets/Tenologias/Illustraitor.png";
import Photoshop from "../assets/Tenologias/Photoshop.png";
import Figma from "../assets/Tenologias/Figma.png";
import Uxui from "../assets/Tenologias/Uxui.png";
import Design from "../assets/Tenologias/DesignThinking.png";



const TecnoCard = () => {
  return (
    <div className="tecno">
   <h1 className="Tecno-heading">Tecnologías & Habilidades</h1>
<div className="card-container">
<div className="card">
<h3>- DEVELOPMENT - </h3>
<span className="bar"></span>
<div>
<img className="img-Dev-Tec" src={html} alt={html} />
<p>HTML</p>
</div>
<div>
<img className="img-Dev-Tec" src={css} alt={css} />
<p>CSS</p>
</div>
<div>
<img className="img-Dev-Tec" src={js} alt={js} />
<p>JAVASCRIPT</p>
</div> 
<div>
<img className="img-Dev-Tec" src={react} alt={react} />
<p>REACT-JS</p>
</div>
<div>
<img className="img-Dev-Tec" src={git} alt={git} />
<p> GIT </p>
</div>
<div>
<img className="img-Dev-Tec" src={Github} alt={Github} />
<p>GITHUB</p>
</div>
</div>
<div className="card">
<h3>- DESIGN - </h3>
<span className="bar"></span>
<div>
<img className="img-Dev-Des" src={Illustraitor} alt={Illustraitor} />
<p>ILLUSTRAITOR</p>
</div>
<div>
<img className="img-Dev-Des" src={Photoshop} alt={Photoshop} />
<p>PHOTOSHOP</p>
</div>
<div>
<img className="img-Dev-Des" src={Figma} alt={Figma} />
<p>FIGMA</p>
</div> 
<div>
<img className="img-Dev-Des" src={Uxui} alt={Uxui} />
<p>UX/UI</p>
</div>
<div>
<img className="img-Dev-Des" src={Design} alt={Design} />
<p>DESIGN THINKING</p>
</div>
</div>
</div>
</div>





    
  )
}

export default TecnoCard