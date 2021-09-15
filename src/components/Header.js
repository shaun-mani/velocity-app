import React from 'react';
import './Header.css';
import University_logo from '../images/UniversityOfWaterloo_logo.png'
import Concept_logo from '../images/concept_velocity_logo.png'

// header function
function Header() {
  return (
    // red bar at header matching UW website format
      <div className="Bar">
    Visit the University of Waterloo &thinsp;    
      <a className = "link" href = "https://uwaterloo.ca/coronavirus/">COVID-19 information website</a>
      &thinsp; to learn about affected campus activities. 
      
      {/* UW logo is clickable and redirects to the main UW official page */}
    <div className="TitleBar">
      <a href = "https://uwaterloo.ca/">
      <img  className="uw_image" src={University_logo} width="189" height="75.78"  alt="c-v-uw-logo"  />
      </a>
      {/* Concept by Velocity is clickable and redirects to the main Concept by Velocity official page */}
      <a href = "https://concept.uwaterloo.ca/">
      <img  className="concept_image" src={Concept_logo} width="182.72" height="48.2"  alt="c-v-uw-logo"  />
      </a>
      {/* title of website */}
      <h1 className="Title">ENTREPRENEURSHIP ECOSYSTEM MAP</h1>

        </div>
    </div>
    
  )
}

export default Header

