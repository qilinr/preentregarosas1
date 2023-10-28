import React from 'react';
import doflamingo from './assets/doflamingoprueba.png';

function Navbar() {
  return (
    <nav>
      <ul>
        <a href="#" className='doflamingo'><img src={doflamingo}></img></a>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}


export default Navbar;