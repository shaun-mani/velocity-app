import React, { Component } from 'react';
import { useState } from "react";
import './App.css';
  

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      deltaX: 0,
      deltaY: 0,
      whileMoving: false,
      styles: {}
    }

    this.moveStart = this.moveStart.bind(this);
    this.whileMoving = this.whileMoving.bind(this);
    this.moveEnd = this.moveEnd.bind(this);

  }
  

  moveStart(e) {
    this.setState ({
      deltaX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      deltaY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      whileMoving: true

    });
  }

  whileMoving(e) {
    if(this.state.whileMoving) {


      let left = e.screenX -  this.state.deltaX  ;
      let top = e.screenY - this.state.deltaY  ;

      this.setState ({
        styles: {
          left: left,
          top: top
        }
      });
         
    }
    
  }

  moveEnd() {
    this.setState({
      whileMoving: false
    });
  }

  render() {
  return (
      <>
      <div>
        <h1>University of Waterloo Concept Web App</h1>
        <viewportimg onMouseDown={this.moveStart} 
        onMouseMove={this.whileMoving}
        onMouseUp={this.moveEnd}> 
        
        </viewportimg>
      </div>
    </>
    
    
  );
  
}
}