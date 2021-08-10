import React, { Component } from 'react'
import './Timeline.css';
import Button from 'react-bootstrap/Button';


const Timeline = (props) => {

<<<<<<< HEAD
class extends Timeline Component {
  constructor(props) {Timeli
    super(props);
    this.state = {
        //message: "Timeline Content!",
        level: "Any"
    }
  }

=======
  function timelineSet(number) {
    if (props.currentKeynum === null) {
      props.setKeynum(number);
      
    } else {
      props.setKeynum(null);
    }
  };
>>>>>>> c5b5a67534abf2a6b7a4a5e91603df5e6124a961

    return (
      <div>

        <div className="text-center">
<<<<<<< HEAD
          <Button variant="outline-dark" onClick={ () => this.updateContent1}>
=======
          <Button variant="outline-dark" onClick={timelineSet(1)}>
>>>>>>> c5b5a67534abf2a6b7a4a5e91603df5e6124a961
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
