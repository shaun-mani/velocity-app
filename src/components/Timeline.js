import React, { Component } from 'react'
import './Timeline.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Badge from 'react-bootstrap/Badge'

const Timeline = (props) => {

  return (
    <div>

      <h2 className="Timeline-title">
        <Badge bg="primary">
          What stage are you in your entrepreneurial journey?
        </Badge>
      </h2>

      <ButtonGroup size="lg" className="timeline-button-group" >
        {/* <div className="text-center"> */}
          <Button variant="success" onClick={() => {
          window.scrollTo(0, 180);
            props.setKeyword(null);
            if (props.currentKeynum === 1) {
              props.setKeynum(1);
            } else {
              props.setKeynum(1)
            }
          }}>
            1. Getting Started
          </Button>
          <Button variant="success" onClick={() => {
              window.scrollTo(0, 180);
            props.setKeyword(null);
            if (props.currentKeynum === 2) {
              props.setKeynum(2);
            } else {
              props.setKeynum(2)
            }
          }}>
            2. Early Stage & problem Identification
          </Button>
          <Button variant="success" onClick={() => {
              window.scrollTo(0, 180);
            props.setKeyword(null);
            if (props.currentKeynum === 3) {
              props.setKeynum(3);
            } else {
              props.setKeynum(3)
            }
          }}>
            3. Building & Testing Your Idea
          </Button>
          <Button variant="success" onClick={() => {
              window.scrollTo(0, 180);
            props.setKeyword(null);
            if (props.currentKeynum === 4) {
              props.setKeynum(4);
            } else {
              props.setKeynum(4)
            }
          }}>
            4. Funding & Competitions
          </Button>
          <Button variant="success" onClick={() => {
              window.scrollTo(0, 180);
            props.setKeyword(null);
            if (props.currentKeynum === 5) {
              props.setKeynum(5);
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
