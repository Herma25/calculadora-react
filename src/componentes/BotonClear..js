import React from "react";
import "../hojas-de-estilo/Boton-Clear.css";

const BotonClear = (props) => (
<div className="boton-clear" 
onClick={props.manejarClear} /* se puede pner clear solo tambien prque el se lllama igual*/>
{props.children} 
</div>
);

export default BotonClear;