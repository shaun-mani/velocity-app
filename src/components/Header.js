import React from 'react';
import './Header.css';
import University_logo from '../images/UniversityOfWaterloo_logo.png'
import Concept_logo from '../images/concept_velocity_logo.png'


function Header() {
  return (
    <div className="Bar">
    
      <a className = "link" href = "https://uwaterloo.ca/coronavirus/">Visit the University of Waterloo COVID-19 information website to learn about affected campus activities. </a>
    <div className="TitleBar">
      <a href = "https://uwaterloo.ca/">
      <img  className="uw_image" src={University_logo} width="189" height="75.78"  alt="c-v-uw-logo"  />
      </a>
      <a href = "https://concept.uwaterloo.ca/">
      <img  className="concept_image" src={Concept_logo} width="189" height="75.78"  alt="c-v-uw-logo"  />
      </a>
      <h1 className="Title">ENTREPRENEURSHIP ECOSYSTEM MAP</h1>
        {/* <img className="uw-image" src={Uwlogo} width="100" height="100" alt="uwlogo" /> */}
      
  
    </div>
    </div>
  )
}

export default Header

