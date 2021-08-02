import React from 'react';
import { useState } from "react";
import './App.css';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import Title from './components/Title';
import Functionclick from './components/Functionclick'
// import Test from './components/Test'
import ButtonClickTest2 from './components/ButtonClickTest2';
// import ButtonClickTest1 from './components/ButtonClickTest1';
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">

        <Title />
        <React.Fragment>
        <div><Sidebar /></div>
        <ButtonClickTest2 />
        <Functionclick />
        {/* <ButtonClickTest1 /> */}
        {/* <Test /> */}
        <div><Map /></div>
        </React.Fragment>

      </div>
      <Footer />
      </div>
  );
}

export default App;
