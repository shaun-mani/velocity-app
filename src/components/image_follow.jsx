import React from 'react';
import { useState } from "react";
import Map from './Map.js';

const getCursorPositionInElement = (evt)=>{
	return {
		x : evt.clientX - evt.currentTarget.getBoundingClientRect().left,
		y : evt.clientY - evt.currentTarget.getBoundingClientRect().top
	}
};

const ImageFollow = ()=>{
	const [mousePos, setMousePos] = React.useState({x:0, y:0});
	const [isMouseDown, setIsMouseDown] = React.useState(false);


	const handleMouseDown = ()=>{
		setIsMouseDown(true);
	}
	const handleMouseUp = ()=>{
		setIsMouseDown(false);
	}

	const handleMouseMove = (evt)=>{
		setMousePos(getCursorPositionInElement(evt))
	}


	let msgPosition = {x : 260, y : 200};

	if(isMouseDown){
		msgPosition = {
			x : mousePos.x,
			y : mousePos.y,
		}
	}

	return <div className='ImageFollow'
			onMouseMove={handleMouseMove}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
		x:{mousePos.x} | y:{mousePos.y}

		<div className='msg' style={{left: mousePos.x, top: mousePos.y}}>
			marker1
		</div>

		<div className='always_half' style={{left: mousePos.x-100, top: mousePos.y-100}}>
			marker2
		</div>

	</div>
}





export default ImageFollow;