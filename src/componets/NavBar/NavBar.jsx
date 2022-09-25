import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav>
        <ul>
            <a href="#"><li>inicio</li></a>
            <a href="#"><li>productos</li></a>
            <a href="#"><li>servicios</li></a>
            <a href="#"><li>contacto</li></a>
        </ul>
         <CartWidget/>
    </nav>
  )
}

export default NavBar