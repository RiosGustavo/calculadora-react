import React from 'react'
import '../hojas-de-estilo/BotonClear.css'


/// tambien se puede hacer con props como una 
/// alternativa a la desestructurazcion
///agregamos el Event Listenner de onClick
const BotonClear = (props) => (
    <div 
    className='boton-clear' 
    onClick={props.manejarClear}>
      {props.children}
    </div>
  )


export default BotonClear
