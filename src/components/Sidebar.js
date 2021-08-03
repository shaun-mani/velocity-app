import React from 'react';
import { useState } from "react";
import './Sidebar.css';


const Sidebar = () => {
    
    return (
      <React.Fragment>
      
      
      <ul className="sidebar-list">
        <li className="sidebar-li"><a href="#home"><h3>Home</h3></a></li>
        <li className="sidebar-li"><a href="#map"><h3>Map</h3></a></li>
        <li className="sidebar-li"><a href="#contact"><h3>Contact</h3></a></li>
        <li className="sidebar-li"><a href="#about"><h3>About</h3></a></li>
      </ul>
      </React.Fragment>
    );

};

export default Sidebar;
