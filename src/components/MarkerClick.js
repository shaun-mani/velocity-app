import React, { Component } from 'react'
import './MarkerClick.css';
import MapMarkerIcon from '../MapMarkerIcon.png';
import Button from 'react-bootstrap/Button';


// ****** This component is the three buttons that have a updated message displayed
// based on the state changing. I was thinking we can use this to display
// the sidebar that pops up when clicking the markers. This is still very rough
// draft, but I think it's the right path! 

// We just need to move it to the side bar. Which I'm not quite
// sure how to do yet. **********


class MarkerClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "SideBar Content!"
    }
  }
 
  updateContent1 = () => {
      this.setState({ message: "Clicked Marker Test 1! (text marker)" });
  }
 
  updateContent2 = () => {
    this.setState({ message: "Clicked Marker Test 2! (img marker without border)"});
}

updateContent3 = () => {
  this.setState({ message: "Clicked Marker Test 3! (img marker with light transparent colour)"});
}


  render() {
    return (
      <div>
        <h2 className="h2 bg-dark text-white text-center p-2">
        Click a Marker to see details!
          <element className = 'border'>{ this.state.message }</element>
        </h2>
        <div className="text-center">
          <Button variant="dark" onClick={this.updateContent1}>
            Marker Test 1
          </Button>
          <button className="btn outline" onClick={this.updateContent2} >
            <img className="map-marker-icon" src={MapMarkerIcon}
             width="21" height="21" alt="markericon" />
          </button>
          <Button variant="outline-success" onClick={this.updateContent3} >
            <img className="map-marker-icon" src={MapMarkerIcon}
             width="21" height="21" alt="markericon" />
          </Button>
        </div>
      </div>
    );
  }
}
 
export default MarkerClick;
