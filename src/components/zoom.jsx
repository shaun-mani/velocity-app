import React from 'react';
import './Map.css';
import zoomStop from './zoomStop'

const Zoom = () => {
const zoomElement = document.querySelector(".zoom")
  
  let zoom = 1;
  const ZOOM_SPEED = 0.1;
  
    
  document.addEventListener("wheel", function(e){
    if(e.deltaY > 0) {
        
      zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`
      console.log(zoomElement)
       let total = zoomElement.style.transform;
       return total; 
    
    }
    else {
      zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`
      console.log(zoomElement)
      let total = zoomElement.style.transform; 
      return total; 
      
    }
}

  
)};


export default Zoom; 

