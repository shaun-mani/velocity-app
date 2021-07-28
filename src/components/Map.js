import React, { Component } from 'react';
import { useState } from "react";
import './Map.css';
import ImageFollow from './image_follow.jsx';
import './image_follow.css';

const Map = () => {
  const[deltaX, setDeltaX] = useState(0);
  const[deltaY, setDeltaY] = useState(0);
  const[whileMoving, setWhileMoving] = useState(false);
  const[styles, setStyles] = useState(null);

  moveStart(e) {
    setDeltaX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setDeltaY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setWhileMoving(true);
  };

  whileMoving(e) {
    if (whileMoving) {
        

      let left = e.screenX - deltaX;
      let top = e.screenY - deltaY;

      console.log(left, top)
     
      if (left > -300 && top > -200 ) { 
        setStyles({
          styles: {
            left: left
            top: top
          }
        });
      }
    }
  };

  moveEnd() {
    setWhileMoving(false);
  };

  render() {
    return (
    
      <div class='Map' 
      onMouseDown= {this.moveStart}
      onMouseMove={this.whileMoving}
      onMouseUp={this.moveEnd}>
          <img style={this.state.styles}
          src="/images/campus_map_half.png" alt=""/>
          <ImageFollow/>
      </div>

    );

  };

};

// export default class Map extends Component {
  
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         deltaX: 0,
//         deltaY: 0,
//         whileMoving: false,
//         styles: {},
//       }
  
//       this.moveStart = this.moveStart.bind(this);
//       this.whileMoving = this.whileMoving.bind(this);
//       this.moveEnd = this.moveEnd.bind(this);
  
//     }
    
//     moveStart(e) {
//       this.setState({
        
        
//         deltaX: e.screenX - e.currentTarget.getBoundingClientRect().left,
//         deltaY: e.screenY - e.currentTarget.getBoundingClientRect().top,
//         whileMoving: true
  
//       });
//     }
  
//     whileMoving(e) {
//       if (this.state.whileMoving) {
        

//         let left = e.screenX - this.state.deltaX;
//         let top = e.screenY - this.state.deltaY;
  
//         console.log(left, top)
       
//         if (left > -300 && top > -200 )
//         { this.setState({
//           styles: {
//             left: left,
//             top: top
//           }
//         });}
       
      
//       }
    
//     }
  
//     moveEnd() {
//       this.setState({
//         whileMoving: false
//       });
//     }
//   //test
//     render() {
//       return (
      
//         <div class='Map' 
//         onMouseDown= {this.moveStart}
//         onMouseMove={this.whileMoving}
//         onMouseUp={this.moveEnd}>
//             <img style={this.state.styles}
//             src="/images/campus_map_half.png" alt=""/>
//             <ImageFollow/>
//         </div>

//       );
  
//     }
//   }