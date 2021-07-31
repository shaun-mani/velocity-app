import React from 'react';
import { useState } from "react";
import './Sidebar.css';


const Sidebar = () => {
    
    return (
      <React.Fragment>
      <div class='Sidebar'/>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#map">Map</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      </React.Fragment>
    );

};

export default Sidebar;
