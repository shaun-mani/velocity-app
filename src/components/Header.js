import React from 'react';
import './Header.css';
import Uwlogo from '../imageuwlogo.png'


function Header() {
  return (
    <div className="Title">
      <h1>
          University of Waterloo Concept App
        <img className="uw-image" src={Uwlogo} width="100" height="100" alt="uwlogo" />
        <h4 className="Title-Subtitle">Presented by Velocity</h4>
    </h1>
    </div>
  )
}

export default Header