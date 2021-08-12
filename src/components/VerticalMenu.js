import React from "react";
import { useState } from "react";
import "./VerticalMenu.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import allcategories from '../images/placeholders.png'


const VerticalMenu = (props) => {
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
      <Button variant="warning" className="menu-categories"
          onClick={() => {
            window.scrollTo(0, 330);
            props.setKeynum(null);
            props.setKeyword(null);
          }}>
          All Categories 
          <img  className="allcategoriesclass" src={allcategories} width="30" height="30"  alt="a-c"  />
      </Button>
      {words.map((word) => (
        <Button variant="dark" className="menu-words"
          onClick={() => {
            window.scrollTo(0, 330);
            props.setKeynum(null);
            if (props.currentKeyword === word) {
              props.setKeyword(word);
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

export default VerticalMenu;
