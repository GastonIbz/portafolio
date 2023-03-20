import "./AboutContentStyles.css";

import React from 'react'
import gaston from "../assets/About/gaston.jpg";


const AboutContent = () => {
  return <div className="about">
<div className="left">
    <h1> 🕹️ </h1>
    
    <br/>
 <p className="Maquinaescribir">Acerca de Gastón:</p>
   <p>Gastón se dedica al desarrollo web enfocado en el Front End, el cual complementa con diseño UX/UI.  </p>
    <p>Todos los días busca seguir aprendiendo nuevas tecnologías y herramientas para poder fortalecer sus conocimientos. </p>
    <p>Ahora, Gastón busca compartir ideas a otras personas que le permitan seguir formandolo de distintas maneras y conocer más sobre diferentes temas. </p>
<p> Al igual que descubrir los valores de las otras personas y mejorar día a día como persona y profesional.</p>
  <p>A la hora de resolver problemas no deja pasar las oportunidades y busca solucionarlas, aunque a veces le cueste afrontarlas, trata de no rendirse.</p>

</div>
<div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={gaston} className="img-super" alt="true"/>
        </div>
      
    </div>
</div>

    </div>
};

export default AboutContent;