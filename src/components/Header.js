import React from 'react';
import './Header.css';
import Uwlogo from '../imageuwlogo.png'
import concept_velocity_uw_img from '../concept_velocity_uw_img.png'


function Header() {
  return (
    <div className="TitleBar">
      
      <img  className="concept_v_uw_image" src={concept_velocity_uw_img} width="492" height="100"  alt="c-v-uw-logo"  />
      <h1 className="Title">Entrepreneurship EcoSystem Map</h1>
        {/* <img className="uw-image" src={Uwlogo} width="100" height="100" alt="uwlogo" /> */}
           
  
    </div>
  )
}

export default Header

