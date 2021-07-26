import React from 'react';


/* You should break apart components into small files whenever possible
My personal guideline is to try and keep files to ~200lines long */


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


	let msgPosition = {x : 20, y : 100};

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

		<div className='msg' style={{left: msgPosition.x, top: msgPosition.y}}>
			yo
		</div>

		<div className='always_half' style={{left: mousePos.x/2, top: mousePos.y/2}}>
			always half
		</div>

	</div>
}





export default ImageFollow;
