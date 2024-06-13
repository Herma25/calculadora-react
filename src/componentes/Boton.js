import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton(props) {

const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor!=='=');
};



  return (
  <div 
  className={`boton-cotenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()/*este metodo permite remiver espacios del pricipio o final de una cadena de caracteres*/ }
  onClick={()=> props.manejarClic(props.children)} >
  
  {props.children}
  </div>
  );
}

export default Boton;
