import React, { Component } from 'react';
import { useState } from "react";
import './Map.css';
import ImageFollow from './image_follow.jsx';
import './image_follow.css';


      // this.state = {
      //   deltaX: 0,
      //   deltaY: 0,
      //   whileMoving: false,
      //   styles: {},
      // }
  
      // this.moveStart = this.moveStart.bind(this);
      // this.whileMoving = this.whileMoving.bind(this);
      // this.moveEnd = this.moveEnd.bind(this);
  
    
    
    const moveStart = (e) => {
      this.useState({
        
        
        deltaX: e.screenX - e.currentTarget.getBoundingClientRect().left,
        deltaY: e.screenY - e.currentTarget.getBoundingClientRect().top,
        whileMoving: true
  
      });
    }
  
    const whileMoving = (e) => {
      if (this.state.whileMoving) {
        
        let left = e.screenX - this.state.deltaX;
        let top = e.screenY - this.state.deltaY;
  
        console.log(left, top)
       
        if (left > -300 && top > -200 )
        { this.useState({
          styles: {
            left: left,
            top: top
          }
        });}
       
      
      }
    
    }
  
    const moveEnd = () => {
      this.useState({
        whileMoving: false

      });
    }
  //test
  const Map = () => {
      return (
      
        <div class='Map' 
        onMouseDown= {moveStart}
        onMouseMove={whileMoving}
        onMouseUp={moveEnd}>
            <img style={this.state.styles}
            src="/images/campus_map_half.png" alt=""/>
            <ImageFollow/>
        </div>

      );
  }
  
export default Map;
    
  