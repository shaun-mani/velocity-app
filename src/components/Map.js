import React from 'react';
import { useState } from "react";
import './Map.css';
import './image_follow.css';
import Zoom from './zoom.jsx';
import zoomStop from './zoomStop.jsx';

const getScreenPositionInElement = (evt) => {
  return {
    x: evt.clientX,
    y: evt.clientY
  }
}

const getCursorPositionInElement = (evt) => {
  return {
    x: evt.clientX - evt.currentTarget.getBoundingClientRect().left,
    y: evt.clientY - evt.currentTarget.getBoundingClientRect().top
  }
};

const Map = () => {
  // mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [screenPos, setScreenPos] = useState({ x: 0, y: 0 })

  // map code

  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [whileMoving, setWhileMoving] = useState(false);
  const [styles, setStyles] = useState({ left: 0, top: 0 });


  const moveStart = (e) => {
    setDeltaX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setDeltaY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setWhileMoving(true);
  };

  const whileMoves = (e) => {
    setMousePos(getCursorPositionInElement(e));
    setScreenPos(getScreenPositionInElement(e));


    if (whileMoving) {


      let left = e.screenX - deltaX;
      let top = e.screenY - deltaY;


      if (left > 0 && top > 0) {
        console.log(left, top)
        setStyles({
          left: left,
          top: top

        });
      }
    }
  };

  const moveEnd = () => {
    setWhileMoving(false);
  };

  function zoom(e) {
    var GFG = document.getElementById("Mapimg");
    var Marker = document.getElementById("marker1");
    var Marker2 = document.getElementById("marker2");

    var currWidth2 = Marker.clientWidth;
    var currHeight2 = Marker.clientHeight;

    var currWidth3 = Marker.clientWidth;
    var currHeight3 = Marker.clientHeight;

    var currWidth = GFG.clientWidth;
    var currHeight = GFG.clientHeight;

    if(e.deltaY > 0) {
    GFG.style.width = (currWidth - 100) + "px";
    GFG.style.height = (currHeight - 100) + "px";
    Marker.style.width = (currWidth2 - 8) + "px";
    Marker.style.height = (currHeight2 - 8) + "px";
    Marker2.style.width = (currWidth3 - 8) + "px";
    Marker2.style.height = (currHeight3 - 8) + "px";
    }
    else{
    GFG.style.width = (currWidth + 100) + "px";
    GFG.style.height = (currHeight + 100) + "px";
    Marker.style.width = (currWidth2 + 8) + "px";
    Marker.style.height = (currHeight2 + 8) + "px";
    Marker2.style.width = (currWidth3 + 8) + "px";
    Marker2.style.height = (currHeight3 + 8) + "px";
    }
  }

 

  // marker code

  // const alertFunction = (num) => {
  //   console.log('marker clicked');
  //   if (((styles.left + (100 * num) - 25 <= mousePos.x) && (mousePos.x <= styles.left + (100 * num) + 25))
  //       && ((styles.top + (100 * num) - 25 <= mousePos.y) && (mousePos.y <= styles.top + (100 * num) + 25))) {
  //      alert(`Marker ${num} has been clicked`);
  //   };
  // };


  return (
    <>

    

      <div class='Map'
        onMouseDown={moveStart}
        onMouseMove={whileMoves}
        onMouseUp={moveEnd}
        onWheelCapture = {zoom}>

      
        <img className='background' style={styles} id="Mapimg"
          src="/images/campus_map_half.png" alt="" />

        <div className='ImageFollow'>
          x:{mousePos.x} , y:{mousePos.y} | x:{screenPos.x} , y:{screenPos.y}

          <img className= 'marker1' id = "marker1"  style={{ left: styles.left + 20, top: styles.top + 20 }}
             src="/images/pin.png" alt=""/>
          
          <img className= 'marker2' id = "marker2" style={{ left: styles.left + 50, top: styles.top + 50 }}
             src="/images/pin2.png" alt=""/>

        </div>

        </div>

      
    </>

  );

};

export default Map;