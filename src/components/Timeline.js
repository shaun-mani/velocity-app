import React, { Component } from 'react'
import './Timeline.css';
import Button from 'react-bootstrap/Button';


const Timeline = (props) => {

  function timelineSet(number) {
    if (props.currentKeynum === null) {
      props.setKeynum(number);
      
    } else {
      props.setKeynum(null);
    }
  };

    return (
      <div>

        <div className="text-center">
          <Button variant="outline-dark" onClick={timelineSet(1)}>
            1. Getting Started
          </Button>
          <Button variant="outline-dark" onClick={timelineSet(2)}>
            2. Early Stage & problem Identification
          </Button>
          <Button variant="outline-dark" onClick={timelineSet(3)}>
            3. Building & Testing Your Idea
          </Button>
          <Button variant="outline-dark" onClick={timelineSet(4)}>
            4. Funding & Competitions
          </Button>
          <Button variant="outline-dark" onClick={timelineSet(5)}>
            5. Starting Up & Launching 
          </Button>
        </div>
      </div>
    );

}

 
export default Timeline;
