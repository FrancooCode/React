import React from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

// 4. Todas las etiquetas <a> las reemplazamos por <Link> o <NavLink>
function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <Link to="/">Inicio </Link>
        <Link to="/error">Error</Link>
        <Link to="/category/hombre">Zapatillas Hombre</Link>
        <Link to="/category/mujer">Zapatillas Mujer</Link>
        <CartWidget />
      </ul>
    </div>
  );
}

export default NavBar;
