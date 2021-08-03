import React from 'react';
import { useState } from "react";
import './Sidebar.css';

// **** This is just a test, did not really work out ********

// changed from <li> to <nav> since the footer also uses <li> and they are aligned differently.
const Sidebar = () => {
    
    return (
      <React.Fragment>
      
      
      <ul className="sidebar-list">
      
        <nav className="sidebar-nav"><a href="#home"><h3>Home</h3></a></nav>
        <nav className="sidebar-nav"><a href="#map"><h3>Map</h3></a></nav>
        <nav className="sidebar-nav"><a href="#contact"><h3>Contact</h3></a></nav>
        <nav className="sidebar-nav"><a href="#about"><h3>About</h3></a></nav>
      </ul>
      </React.Fragment>
    );

};

export default Sidebar;
