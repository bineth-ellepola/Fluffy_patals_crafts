import React from "react";
import "../style/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Fluffy Petals 🌸</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
