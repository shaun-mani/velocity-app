import React, { Component } from 'react'
import './Timeline.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Badge from 'react-bootstrap/Badge'
import journeylogo from '../images/route.png'

// Timeline const object
const Timeline = (props) => {

  return (
    <div>

       {/* Timeline title badge */}
      <h2 className="Timeline-title">
        <Badge bg="warning" text="dark">
          What stage are you in your entrepreneurial journey?
          <img  className="journeylogoclass" src={journeylogo} width="35" height="35"  alt="j-l"  />
        </Badge>
      </h2>

      {/* Button Group for timeline selections. */}
      <ButtonGroup size="lg" className="timeline-button-group" >
          {/* onclick function for button 1 */}
          <Button variant="dark" onClick={() => {
          // brings the window to scroll to desired view
          window.scrollTo(0, 230);
            // This is the math that filters the markers to 
            // show the desired result markers for stage 1
            props.setKeyword(null);
            if (props.currentKeynum === 1) {
              props.setKeynum(1);
            } else {
              props.setKeynum(1)
            }
          }}>
            1. Getting Started
          </Button>

          {/* onclick function for button 2 */}
          <Button variant="dark" onClick={() => {
              window.scrollTo(0, 230);
            // This is the math that filters the markers to 
            // show the desired result markers for stage 2
            props.setKeyword(null);
            if (props.currentKeynum === 2) {
              props.setKeynum(2);
            } else {
              props.setKeynum(2)
            }
          }}>
            2. Early Stage & Problem Identification
          </Button>
          
          {/* onclick function for button 3 */}
          <Button variant="dark" onClick={() => {
              window.scrollTo(0, 230);
            // This is the math that filters the markers to 
            // show the desired result markers for stage 3
            props.setKeyword(null);
            if (props.currentKeynum === 3) {
              props.setKeynum(3);
            } else {
              props.setKeynum(3)
            }
          }}>
            3. Building & Testing Your Idea
          </Button>

          {/* onclick function for button 4 */}
          <Button variant="dark" onClick={() => {
              window.scrollTo(0, 230);
            // This is the math that filters the markers to 
            // show the desired result markers for stage 4
            props.setKeyword(null);
            if (props.currentKeynum === 4) {
              props.setKeynum(4);
            } else {
              props.setKeynum(4)
            }
          }}>
            4. Funding & Competitions
          </Button>

          {/* onclick function for button 5 */}
          <Button variant="dark" onClick={() => {
              window.scrollTo(0, 230);
            // This is the math that filters the markers to 
            // show the desired result markers for stage 5
            props.setKeyword(null);
            if (props.currentKeynum === 5) {
              props.setKeynum(5);
            } else {
              props.setKeynum(5)
            }
          }}>
            5. Starting Up & Launching
          </Button>
      </ButtonGroup>

    </div>
  );

}


export default Timeline;
