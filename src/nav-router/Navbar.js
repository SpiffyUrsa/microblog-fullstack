import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar(){

  return(
    <nav className="Navbar navbar bg-secondary rounded">
      <h1 className="navbar-brand">Microblog</h1>
      <h2 className="nav-item">Get in the Rithm of blogging!</h2>
      <NavLink exact to="/" className="nav-link">Blog</NavLink>
      <NavLink exact to="/new" className="nav-link">Add a new post</NavLink>
    </nav>
  )
}

export default Navbar