import React, { Component, useState } from 'react';
import './Map.css';
import './image_follow.css';
import Zoom from './zoom.jsx';

class Maptest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isdrag: false,
            imgPos: {
                left: 0,
                top: 0
            }

        };
        this.mouseisdown = this.mouseisdown.bind(this);
        this.mouseisup = this.mouseisup.bind(this);
        this.mousedrag = this.mousedrag.bind(this);

    }

    componentDidMount() {
        window.addEventListener('dragstart', this.mouseisdown)
        window.addEventListener('Ddragend', this.mouseisup)
        window.addEventListener('drag', this.mousedrag)
        window.addEventListener('scroll', this.zoomimage)
    }

    componentWillUnmount() {
        window.removeEventListener('dragstart', this.mouseisdown)
        window.removeEventListener('dragend', this.mouseisup)
        window.removeEventListener('drag', this.mousedrag)
        window.removeEventListener('scroll', this.zoomimage)
    }

    mouseisdown(e) {
        this.setState({
            isdrag: true
        })
        console.log(this.state.isdrag)
    }

    mouseisup() {
        this.setState({ isdrag: false })
        console.log(this.state.isdrag)
    }
  
 zoomin() {
    var GFG = document.getElementById("Maptest");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 300) + "px";
}

 zoomout() {
    var GFG = document.getElementById("Maptest");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 300) + "px";


}

mousedrag(e) {

    if (this.state.isdrag) {


        let left = e.screenX
        let top = e.screenY

        if (left > 0 && top > 0) {
            this.setState({
                imgPos: {
                    left: left,
                    top: top
                }
            })
        }

    }
}

render() {
    return (
        <>
        <button type="button" onClick={this.zoomin}>
            Zoom In
        </button>
        <button type="button" onClick={this.zoomout}>
            Zoom Out
        </button>
        <div class='Maptest'>
            <img src="/images/campus_map_half.png" id="Maptest"
                style={this.state.imgPos} alt="" />

        </div>
        </>

    )



}



};

export default Maptest;