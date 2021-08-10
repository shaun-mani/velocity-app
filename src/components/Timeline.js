import React, { Component } from 'react'
import './Timeline.css';
import Button from 'react-bootstrap/Button';


const Timeline = (props) => {

  return (
    <div>

      <div className="text-center">
        <Button variant="outline-dark" onClick={() => {
          props.setKeyword(null);
          if (props.currentKeynum === null) {
            props.setKeynum(1);
          } else {
            props.setKeynum(null)
          }
        }}>
          1. Getting Started
        </Button>
        <Button variant="outline-dark" onClick={() => {
          props.setKeyword(null);
          if (props.currentKeynum === null) {
            props.setKeynum(1);
          } else {
            props.setKeynum(null)
          }
        }}>
          2. Early Stage & problem Identification
        </Button>
        <Button variant="outline-dark" onClick={() => {
          props.setKeyword(null);
          if (props.currentKeynum === null) {
            props.setKeynum(1);
          } else {
            props.setKeynum(null)
          }
        }}>
          3. Building & Testing Your Idea
        </Button>
        <Button variant="outline-dark" onClick={() => {
          props.setKeyword(null);
          if (props.currentKeynum === null) {
            props.setKeynum(1);
          } else {
            props.setKeynum(null)
          }
        }}>
          4. Funding & Competitions
        </Button>
        <Button variant="outline-dark" onClick={() => {
          props.setKeyword(null);
          if (props.currentKeynum === null) {
            props.setKeynum(1);
          } else {
            props.setKeynum(null)
          }
        }}>
          5. Starting Up & Launching
        </Button>
      </div>
    </div>
  );

}


export default Timeline;
