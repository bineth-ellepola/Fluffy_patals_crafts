import React from "react";
import "../style/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Fluffy Petals 🌸</h1>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
