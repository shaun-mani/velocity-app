import React from 'react';
import { useState } from "react";
import './Map.css';
import './image_follow.css';
 
const getCursorPositionInElement = (evt) => {
 return {
    x : evt.clientX - evt.currentTarget.getBoundingClientRect().left,
    y : evt.clientY - evt.currentTarget.getBoundingClientRect().top
 }
};
 
const ImageFollow = () => {
 const [mousePos, setMousePos] = React.useState({x:0, y:0});
 const [isMouseDown, setIsMouseDown] = React.useState(false);
 
 const handleMouseDown = () => {
 setIsMouseDown(true);
 }
 
 const handleMouseUp = () => {
 setIsMouseDown(false);
 }
 
 const handleMouseMove = (evt) => {
 setMousePos(getCursorPositionInElement(evt))
 }
 
 return <div className='ImageFollow'
 onMouseMove={handleMouseMove}
 onMouseDown={handleMouseDown}
 onMouseUp={handleMouseUp}
 >
 x:{mousePos.x} | y:{mousePos.y}
 
 <div className='msg' style={{left: mousePos.x - 100, top: mousePos.y - 100}}>
marker1
 </div>
 
 <div className='always_half' style={{left: mousePos.x, top: mousePos.y}}>
marker2
 </div>
 
 </div>
};
 
const Map = () => {
 
 const[deltaX, setDeltaX] = useState(0);
 const[deltaY, setDeltaY] = useState(0);
 const[whileMoving, setWhileMoving] = useState(false);
 const[styles, setStyles] = useState();
 
 const moveStart = (e) => {
 setDeltaX(e.screenX - e.currentTarget.getBoundingClientRect().left);
 setDeltaY(e.screenY - e.currentTarget.getBoundingClientRect().top);
 setWhileMoving(true);
 };
 
 const whileMoves = (e) => {
 if (whileMoving) {
 
 
 let left = e.screenX - deltaX;
 let top = e.screenY - deltaY;
 
 console.log(left, top)
 
 if (left > -300 && top > -200 ) { 
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
 
 return (
 <div class='Map' 
 onMouseDown= {moveStart}
 onMouseMove={whileMoves}
 onMouseUp={moveEnd}>
 <img style={styles}
 src="/images/campus_map_half.png" alt=""/>
 <ImageFollow/>
 </div>
 
 );
 
 };
 
export default Map;