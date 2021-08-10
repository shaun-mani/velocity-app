import React from "react";
import { useState } from "react";
import "./Verticalmenu.css";

// **** This is just a test, did not really work out ********

// changed from <li> to <nav> since the footer also uses <li> and they are aligned differently.
const Verticalmenu = (props) => {
  const words = ["Funding", "Pitch Competitions","Skills Building", "Coaching/Mentorship", "Social Justice", "Environmental", "Small Business", "Intrapreneurship", "Linked to academics", "Networking", "Research", "Legal", "Community", "Events", "Awards"];
  return (
    <React.Fragment>
      <div class="Verticalmenu">
        <h4 class="top">Categories</h4>
        {words.map((word) => (
          <h1
            class="top"
            onClick={() => {
              if (props.currentKeyword === word) {
                props.setKeyword(null);
              } else {
                props.setKeyword(word);
              }
            }}
          >
            {word}
          </h1>
        ))}

        {/* <h1>Pitch Competitions</h1> */}
        {/* <a href="#">Skills Building</a>
        <a href="#">Coaching/Mentorship</a>
        <a href="#">Social Justice</a>
        <a href="#">Environmental</a>
        <a href="#">Small Business</a>
        <a href="#">Intrapreneurship</a>
        <a href="#">Linked to academics</a>
        <a href="#">Networking</a>
        <a href="#">Research</a>
        <a href="#">Legal</a>
        <a href="#">Community</a>
        <a href="#">Events</a>
        <a href="#">Awards</a> */}
      </div>
    </React.Fragment>
  );
};

export default Verticalmenu;
