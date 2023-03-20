import "./FormularioStyles.css"

import React from 'react'

const Formulario = () => {
  return <div className="form">
   
<form>
<p className="Maquinaescribir2">Contactame:</p>
    <label>Escribir tu Nombre </label>
    <input type="text"></input>
    <label>Escribir tu Email </label>
    <input type="email"></input>
    <label>Escribir sobre que asunto quieres hablar</label>
    <input type="text"></input>
    <label> Escribir un mensaje </label>
    <textarea rows="5" placeholder="Escribe tu mensaje aquí..."/>
    <button className="btn-form btn-light">Enviar Mensaje</button>
  
 </form>

  </div>
};

export default Formulario;