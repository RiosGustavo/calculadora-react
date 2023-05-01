
import React from 'react';
import '../hojas-de-estilo/Boton.css';


function Boton  (props) {

    const esOperador = valor => {
        /// con esta isNaN confirmamos si una cadena de caracteres no es un numero
        /// con esto vemos nos aseguramos wuel = y el , no sean considerados operadores
        return isNaN(valor) && (valor != '.')  && (valor != '=') ;

    };


  return(
    <div 
    /// con esta condicion le decimos que si props.children es  operador nos devuelde el operador sino null
    /// el metodo .trimEnd() permite remover espeacios de una plantilla  al final de la cadena de caracteres
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : '' }`.trimEnd() }
      /// aca creamos una funcion flecha anonima para que onClick sea una funcion 
      /// con este le decimos que llame a esta funcion 
      onClick ={() => props.manejarClick(props.children)}>
        {props.children}
    </div>
  )
}

export default Boton
