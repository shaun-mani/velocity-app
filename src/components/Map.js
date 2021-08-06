import React from 'react';
import { useState } from "react";
import './Map.css';
import './image_follow.css';
import Zoom from './zoom.jsx';

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

  function zoomin() {
    var GFG = document.getElementById("Mapimg");
    var currWidth = GFG.clientWidth;
    var currHeight = GFG.clientHeight;
    GFG.style.width = (currWidth + 100) + "px";
    GFG.style.height = (currHeight + 100) + "px";
  }

  function zoomout() {
    var GFG = document.getElementById("Mapimg");
    var currWidth = GFG.clientWidth;
    var currHeight = GFG.clientHeight;
    GFG.style.width = (currWidth - 100) + "px";
    GFG.style.height = (currHeight - 100) + "px";


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

      <button type="button" onClick={zoomin}>
        Zoom In
      </button>

      <button type="button" onClick={zoomout}>
        Zoom Out
      </button>

      <div class='Map'
        onMouseDown={moveStart}
        onMouseMove={whileMoves}
        onMouseUp={moveEnd}>

        <div class ="zoom" onWheelCapture={Zoom}>

        <img style={styles} id="Mapimg"
          src="/images/campus_map_half.png" alt="" />

        <div className='ImageFollow'>
          x:{mousePos.x} , y:{mousePos.y} | x:{screenPos.x} , y:{screenPos.y}

          <div className='msg'
            style={{ left: styles.left + 100, top: styles.top + 100 }}>
            Marker1
          </div>

          <div className='always_half'
            style={{ left: styles.left + 200, top: styles.top + 200 }}>
            Marker2
          </div>

        </div>

        </div>

      </div>
    </>

  );

};

export default Map;