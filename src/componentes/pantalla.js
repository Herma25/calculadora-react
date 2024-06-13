import React from "react";
import "../hojas-de-estilo/pantalla.css";

const Pantalla = ({ input }) => ( /*se pone const para que n se pueda re asignar los vaores*/
    <div className="input" /* componente cm funcion flecha  */>

        {input}
    </div>
);

export default Pantalla;