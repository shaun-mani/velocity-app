import React, { Component } from 'react'
import './Timeline.css';
import Button from 'react-bootstrap/Button';


// ****** This is just a test for now ***

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //message: "Timeline Content!",
        level: "Any"
    }
  }

    return (
    
        <div className="text-center">
          <Button variant="outline-dark" onClick={ () => this.updateContent1}>
            1. Getting Started
          </Button>
          <Button variant="outline-dark" onClick={this.updateContent2}>
            2. Early Stage & problem Identification
          </Button>
          <Button variant="outline-dark" onClick={this.updateContent3}>
            3. Building & Testing Your Idea
          </Button>
          <Button variant="outline-dark" onClick={this.updateContent4}>
            4. Funding & Competitions
          </Button>
          <Button variant="outline-dark" onClick={this.updateContent5}>
            5. Starting Up & Launching 
          </Button>
        </div>
      
    );
}

 
export default Timeline;
