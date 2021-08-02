import React from 'react';
import { useState } from "react";
import './Sidebar.css';


const Sidebar = () => {
    
    return (
      <React.Fragment>
      
      
      <ul className="sidebar-list">
        <li className="sidebar-li"><a href="#home">Home</a></li>
        <li className="sidebar-li"><a href="#map">Map</a></li>
        <li className="sidebar-li"><a href="#contact">Contact</a></li>
        <li className="sidebar-li"><a href="#about">About</a></li>
      </ul>
      </React.Fragment>
    );

};

export default Sidebar;
