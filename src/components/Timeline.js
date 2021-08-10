import React, { Component } from 'react'
import './Timeline.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Timeline = (props) => {

  return (
    <div>

      <h3 className="Timeline-title">
        What stage are you in your entrepreneurial journey?
      </h3>

      <ButtonGroup size="lg" className="timeline-button-group" >
        {/* <div className="text-center"> */}
          <Button variant="outline-dark" onClick={() => {
            props.setKeyword(null);
            if (props.currentKeynum === 1) {
              props.setKeynum(null);
            } else {
              props.setKeynum(1)
            }
          }}>
            1. Getting Started
          </Button>
          <Button variant="outline-dark" onClick={() => {
            props.setKeyword(null);
            if (props.currentKeynum === 2) {
              props.setKeynum(null);
            } else {
              props.setKeynum(2)
            }
          }}>
            2. Early Stage & problem Identification
          </Button>
          <Button variant="outline-dark" onClick={() => {
            props.setKeyword(null);
            if (props.currentKeynum === 3) {
              props.setKeynum(null);
            } else {
              props.setKeynum(3)
            }
          }}>
            3. Building & Testing Your Idea
          </Button>
          <Button variant="outline-dark" onClick={() => {
            props.setKeyword(null);
            if (props.currentKeynum === 4) {
              props.setKeynum(null);
            } else {
              props.setKeynum(4)
            }
          }}>
            4. Funding & Competitions
          </Button>
          <Button variant="outline-dark" onClick={() => {
            props.setKeyword(null);
            if (props.currentKeynum === 5) {
              props.setKeynum(null);
            } else {
              props.setKeynum(5)
            }
          }}>
            5. Starting Up & Launching
          </Button>
        {/* </div> */}
      </ButtonGroup>
    </div>
  );

}


export default Timeline;
