import "./App.css";
import hermazlogo from "./imagenes/hermaz-logo.webp";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/pantalla";
import BotonClear from "./componentes/BotonClear.";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("ingrese valores para poder realizar el calculo");
    }
  };

  return (
    <div className="App">
      <div className="herma-logo-contenedor">
        <img src={hermazlogo} className="herma-logo" alt="logo de herma" />
      </div>

      <div
        className="contenedor-calculadora" /*son 4 divs que va a forar las filas de la calculadora*/
      >
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput ("")}> Clear </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
