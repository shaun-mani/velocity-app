import React from 'react';
import { useState } from "react";
import './App.css';
import Map from './components/Map';
import NavBar from './components/NavBar';
import Header from './components/Header';
import FunctionClickTest0 from './components/FunctionClickTest0'
// import Test from './components/Test'
import MarkerClick from './components/MarkerClick';
// import ButtonClickTest1 from './components/ButtonClickTest1';
import Footer from './components/Footer'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">

        <Header />
        <React.Fragment>
        <div><NavBar /></div>
        <MarkerClick />
        <FunctionClickTest0 />
        {/* <ButtonClickTest1 /> */}
        {/* <Test /> */}
        <div><Map /></div>
        </React.Fragment> 
        <Timeline />
      </div>
      <Footer />
      </div>
  );
}

export default App;
