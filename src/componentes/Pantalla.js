import React from 'react';
import '../hojas-de-estilo/Pantalla.css'
/// aca definimos un componente como una funcion flecha 
//
const Pantalla = ({ input }) => (
    <div className='input'>
      {input}
    </div>
  );


export default Pantalla;
