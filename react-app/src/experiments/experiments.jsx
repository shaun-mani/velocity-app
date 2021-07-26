import React from 'react';
import './experiments.css';


import ImageFollow from './image_follow.jsx';



const ContentChanger = ()=>{
	const [toggle, setToggle] = React.useState(false);
	let content = 'click me to toggle';

	//Refs are like state, except they don't trigger a re-draw
	let toggleCount = React.useRef(0);

	if(toggle){
		content = 'I have been toggled';
	}

	const handleClick = ()=>{
		setToggle(!toggle);
		toggleCount.current = toggleCount.current + 1;

		if(toggleCount.current === 3){
			alert('you have toggled 3 times!');
		}
	}

	return <div className='ContentChanger' onClick={handleClick}>
		{content}
	</div>
};




const Experiments = ()=>{
	return <div className='Experiments'>
		<h2>Just experiments</h2>

		<h4> Content Changer <small>Try clicking a few times</small></h4>
		<ContentChanger />

		<hr />

		<h4> Image Follow - <small>Try click and dragging</small></h4>
		<ImageFollow />

	</div>
}


export default Experiments;