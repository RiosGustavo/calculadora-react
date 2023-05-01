import "./App.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import logofreeCodeCamp from "./imagenes/logo freeCodeCamp.png";
import BotonClear from "./componentes/BotonClear";

/// aca utilizamos el Hook useState
import { useState } from "react";

/// importamos la funcion matematica
import { evaluate } from 'mathjs';



function App() {
  /// osea que podemos asignar unestado al componente principal de la aplicacion con el useState
  /// es el valor ingresado por el usuario el input
  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };
  /// con la funcion evaluate se hacen funcionen matemaiticas
  /// hay que importarla del paquete de matematicas de mathjs
  const cacularResultado = () => {
    if(input){
      setInput(evaluate(input));
    } else{
      alert("por favor ingrese valores para realizar los cálculos")
    }

  };


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={logofreeCodeCamp}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton> 
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={cacularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          
          <BotonClear manejarClear={ () =>  setInput('')}>
            Clear
            </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
