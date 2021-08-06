import React from 'react';
import { useState } from "react";
import './Map.css';
import './image_follow.css';
import Zoom from './zoom.jsx';
import zoomStop from './zoomStop.jsx';

const getCursorPositionInElement = (evt) => {
	return {
		x : evt.clientX - evt.currentTarget.getBoundingClientRect().left,
		y : evt.clientY - evt.currentTarget.getBoundingClientRect().top
	}
};

const Map = () => {
  // mouse position
  const [mousePos, setMousePos] = useState({x:0, y:0});

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

    if (whileMoving) {

      //setMapPos(e.screenX - deltaX, e.screenY - deltaY)

      let left = e.screenX - deltaX;
      let top = e.screenY - deltaY;

     
      if (left > 0 && top > 0 ) { 
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

  // marker code

    //const [mousePos, setMousePos] = useState({x:0, y:0});
    //const [isMouseDown, setIsMouseDown] = useState(false);
  
  
    //const handleMouseDown = () => {
      //setIsMouseDown(true);
    //}
  
    //const handleMouseUp = () => {
      //setIsMouseDown(false);
    //}
  
    // const handleMouseMove = (evt) => {
    //   if (whileMoving) {
    //     setMousePos(getCursorPositionInElement(evt));
    //   };
    // }

    // const alertFunction = (num) => {
    //   console.log('marker clicked');
    //   if (((styles.left + (100 * num) - 25 <= mousePos.x) && (mousePos.x <= styles.left + (100 * num) + 25))
    //       && ((styles.top + (100 * num) - 25 <= mousePos.y) && (mousePos.y <= styles.top + (100 * num) + 25))) {
    //      alert(`Marker ${num} has been clicked`);
    //   };
    // };

   

    
      
    


    return (
      <div class='Map'
      onMouseDown= {moveStart}
      onMouseMove={whileMoves}
      onMouseUp={moveEnd}>
      <div class= 'zoom'  onMouseDownCapture={Zoom} onMouseLeave = {zoomStop}>
          <img  style={styles}
          src="/images/campus_map_half.png" alt=""/>
 
      <div className='ImageFollow'
			//onMouseMove={handleMouseMove}
			//onMouseDown={handleMouseDown}
			//onMouseUp={handleMouseUp}
		>
		x:{styles.left}, {mousePos.x} | y:{styles.top}, {mousePos.y} | {deltaX}, {deltaY}

		<div className='msg' 
         style={{left: styles.left + 100, top: styles.top + 100}}>
			Marker1
		</div>

		<div className='always_half' 
         style={{left: styles.left + 200, top: styles.top + 200}}>
			Marker2
		</div>
    </div>
    </div>
	</div>
      


  //const handleMouseDown = () => {
  //setIsMouseDown(true);
  //}

  //const handleMouseUp = () => {
  //setIsMouseDown(false);
  //}

  // const handleMouseMove = (evt) => {
  // if (whileMoving) {
  // setMapPos(getCursorPositionInElement(evt));
  // };
  // }
  
  // return (
  //   <div>
  //     <div class='Map'
  //       onMouseDown={moveStart}
  //       onMouseMove={whileMoves}
  //       onMouseUp={moveEnd}>
          
  //      <div class ="zoom" onWheelCapture={Zoom}>
  //       <img style={styles}
  //         src="/images/campus_map_half.png" alt="" />

  //       <div className='ImageFollow'
  //       //onMouseMove={handleMouseMove}
  //       //onMouseDown={handleMouseDown}
  //       //onMouseUp={handleMouseUp}
  //       >
         
         
  //         x:{styles.left} | y:{styles.top}

  //         <div className='msg' style={{ left: styles.left - 100, top: styles.top - 100 }}>
  //           marker1
  //         </div>

  //         <div className='always_half' style={{ left: styles.left + 100, top: styles.top + 100 }}>
  //           marker2
  //         </div>
  //         </div>

  //         </div>
  //     </div>
  //   </div>

  );

};

export default Map;