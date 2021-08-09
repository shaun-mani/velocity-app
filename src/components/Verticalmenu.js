import React from 'react';
import { useState } from "react";
import './Verticalmenu.css';

// **** This is just a test, did not really work out ********

// changed from <li> to <nav> since the footer also uses <li> and they are aligned differently.
const Verticalmenu = () => {
    
    return (
      <React.Fragment>
      
      
      <div class="Verticalmenu">
  <a class="top"> Categories</a>
  <a >Funding</a>
  <a >Pitch Competitions</a>
  <a >Skills Building</a>
  <a >Coaching/Mentorship</a>
  <a >Social Justice</a>
  <a >Environmental</a>
  <a >Small Business</a>
  <a >Intrapreneurship</a>
  <a >Linked to academics</a>
  <a >Networking</a>
  <a >Research</a>
  <a >Legal</a>
  <a >Community</a>
  <a >Events</a>
  <a >Awards</a>
      </div>
      </React.Fragment>
    );

};

export default Verticalmenu;