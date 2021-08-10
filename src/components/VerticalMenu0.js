import React from "react";
import { useState } from "react";
import "./VerticalMenu0.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const VerticalMenu0 = (props) => {
  const words = [
    "Funding",
    "Pitch Competition",
    "Skills Building",
    "Coaching/Mentorship",
    "Social Justice",
    "Environmental",
    "Small Business",
    "Intrapreneurship",
    "Linked to Academics",
    "Networking",
    "Research",
    "Legal",
    "Community",
    "Events",
    "Competition",
    "Award"
  ];

  return (
    <ButtonGroup size="lg" vertical className="vertical-menu-css" >
      <Button variant="outline-danger" className="menu-categories"
          onClick={() => {
            props.setKeynum(null);
            props.setKeyword(null);
          }}>
          Categories (reset)
      </Button>
      {words.map((word) => (
        <Button variant="outline-dark" className="menu-words"
          onClick={() => {
            props.setKeynum(null);
            if (props.currentKeyword === word) {
              props.setKeyword(null);
            } else {
              props.setKeyword(word);
            }
          }}
        >
          {word}
        </Button>
      ))}
      </ButtonGroup>
  );
};

export default VerticalMenu0;
