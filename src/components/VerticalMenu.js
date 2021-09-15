import React from "react";
import { useState } from "react";
import "./VerticalMenu.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import allcategories from '../images/placeholders.png'

// const object for CategoriesMenu
const VerticalMenu = (props) => {
  // all categories words
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
    // button group for listing the 'all categories menu'
    <ButtonGroup size="lg" vertical className="vertical-menu-css" >
      <Button variant="warning" className="menu-categories"
          // on click function for buttons
          onClick={() => {
            // window will scroll to preferable area of website
            window.scrollTo(0, 230);
            // sets props to null to serve as clean slate to math filtering
            props.setKeynum(null);
            props.setKeyword(null);
          }}>
          All Categories 
          <img  className="allcategoriesclass" src={allcategories} width="30" height="30"  alt="a-c"  />
      
      {/* Buttons for categories are mapped */}
      </Button>
      {words.map((word) => (
        <Button variant="dark" className="menu-words"
        // on click function
          onClick={() => {
            window.scrollTo(0, 230);
            // This is the math that filters the markers to 
            // show the desired result markers for each category clicked
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
