import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemons</Link>
        </li>
        <li>Trainers</li>
        <li>Regions</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;