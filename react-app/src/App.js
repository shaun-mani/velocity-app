import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  picClick(){
    alert("Clicked")
  }

  mouseDown() {
    alert("Mouse moved down")
  }

  render() {
  return (
      <>
      <div>
        <img onClick={this.picClick()} onDragStart={this.mouseDown}
        src="/images/campus_map_half.png" alt="" />
        
      </div>
    </>
    
    
  );
  
}
}
