import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>
        <Link to={"/Randomuser"}>SHARENERGY</Link>
      </h3>
      <ul>
        <li >
            
          <Link to={"/Randomuser"}  className="new-btn" >USER GENERATOR</Link>
          
        </li>
        <li >
            
          <Link to={"/cadastrar"}  className="new-btn" >CLIENTES</Link>
          
        </li>
        <li >
            
        <Link to={"/Dog"}  className="new-btn" >DOG GENERATOR</Link>
          
        </li>
        <li >
            
        <Link to={"/CatHttp"}  className="new-btn" >HTTP CAT</Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
