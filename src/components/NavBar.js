// ******* THIS FILE WORKS PERFECTLY FINE! WE ARE SIMPLY NOT USING IT 
// IN OUR APP.JS FILE *********


import React from 'react';
import { useState } from "react";
import './NavBar.css';


const NavBar = () => {
    
    return (
      <React.Fragment>
      
      
      <ul className="navbar-list">
      
        <nav className="navbar-item"><a href="#home"><h3>Home</h3></a></nav>
        <nav className="navbar-item"><a href="#map"><h3>Map</h3></a></nav>
        <nav className="navbar-item"><a href="#contact"><h3>Contact</h3></a></nav>
        <nav className="navbar-item"><a href="#about"><h3>About</h3></a></nav>
      </ul>
      </React.Fragment>
    );

};

export default NavBar;
