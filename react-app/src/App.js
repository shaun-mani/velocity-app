import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  picClick(){
    alert("Clicked")
  }

  render() {
    const {post} = this.props
  return (
      <>
      <div>
        <img onClick={this.picClick} src="/images/campus_map_half.png" alt="" />
        
      </div>
    </>
    
    
  );
  
}
}
