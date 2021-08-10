import React from 'react';
import './Header.css';
import Uwlogo from '../imageuwlogo.png'
import concept_velocity_uw_img from '../concept_velocity_uw_img.png'


function Header() {
  return (
    <div className="Title">
      <h1>
      <img className="concept_v_uw_image" src={concept_velocity_uw_img} width="492" height="100" alt="c-v-uw-logo" />
           Entrepreneurship EcoSystem Map
        {/* <img className="uw-image" src={Uwlogo} width="100" height="100" alt="uwlogo" /> */}
            <h4 className="Title-Subtitle">Concept by Velocity</h4>
    </h1>
    </div>
  )
}

export default Header