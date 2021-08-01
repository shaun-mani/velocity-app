import React from 'react';
import { useState } from "react";
import './App.css';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import Title from './components/Title';

function App() {
  return (
    <>
    <Title />
    {/* <h1>University of Waterloo Concept App</h1> */}
    <React.Fragment>
    <div><Sidebar /></div>
        <div><Map /></div>
        
        </React.Fragment>
    </>
  );
}

export default App;
