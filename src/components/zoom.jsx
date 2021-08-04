import React from 'react';
import './Map.css';

const Zoom = () => {
const zoomElement = document.querySelector(".zoom")
  
  let zoom = 1;
  const ZOOM_SPEED = 0.1;
  

  document.addEventListener("wheel", function(e){
    if(e.deltaY > 0) {
        console.log(e.deltaY)
      zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`
    }
    else {
      zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`
      console.log(e.deltaY)
    }
}

  
);

}

export default Zoom; 

