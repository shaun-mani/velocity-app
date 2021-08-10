import React, { Component } from 'react'
import './Timeline.css';
import Button from 'react-bootstrap/Button';


const Timeline = (props) => {
  const numbers = [1, 2, 3, 4, 5];

    return (
      <div>

        <div className="text-center">
          <Button variant="outline-dark" onClick={this.updateContent1}>
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
      </div>
    );

}
 
export default Timeline;
