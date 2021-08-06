import React from 'react';
import './Map.css';
import Zoom from './zoom.jsx'

const zoomStop = (total) => {
const zoomElement = document.querySelector(".zoom")
  

  document.addEventListener("wheel", function(e){
    if(e.deltaY > 0) {
        
      zoomElement.style = total;
    
    }
    else {
      zoomElement.style = total;
      
    }
}

  
)};


export default zoomStop; 


