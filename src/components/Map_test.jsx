import React, {Component, useState} from 'react';
import './Map.css';
import './image_follow.css';
import Zoom from './zoom.jsx';

class Maptest extends Component {

    constructor(props) {
      super(props);
      this.state={
        isdrag:false
      };
      this.mouseisdown=this.mouseisdown.bind(this);
      this.mouseisup=this.mouseisup.bind(this);
  
    }
  
    componentDidMount() {
      window.addEventListener('mousedown', this.mouseisdown)
      window.addEventListener('mouseup', this.mouseisup)
      window.addEventListener('mousemove', this.mouseisdrag)
      window.addEventListener('scroll',this.zoomimage)
    }
  
    componentWillUnmount() {
      window.removeEventListener('mousedown', this.mouseisdown)
      window.removeEventListener('mouseup', this.mouseisup)
      window.removeEventListener('mousemove', this.mouseisdrag)
      window.removeEventListener('scroll',this.zoomimage)
    }
  
    mouseisdown() {
      this.setState({isdrag:true})
      console.log(this.state.isdrag)
    }
  
    mouseisup() {
      this.setState({isdrag:false})
      console.log(this.state.isdrag)
    }
  
    zoomimage(){
  
    }
  
    mousedrag(e) {
      let x = e.clientX;
      let y = e.clientY;
    console.log(`{${x},${y}`)
  }

  render () {
    return (
      <div class='Map_test'>
          <img  src="/images/campus_map_half.png" alt=""/>
    </div>


    )



  }



};

export default Maptest;