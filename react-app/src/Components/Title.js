import React from 'react';
import './Title.css';
import Uwlogo from '../imagelogouw.png'

function Title() {
  return (
    <div className="Title">
      <h1>University of Waterloo Concept App</h1>
        <div className="Title-Subtitle">Presented by Velocity</div>
        <img src={Uwlogo} width="100" height="100" alt="uwlogo" />
    </div>
  )
}

export default Title