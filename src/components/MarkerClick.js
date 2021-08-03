import React, { Component } from 'react'
import './MarkerClick.css';


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
      this.setState({ message: "Clicked Marker Test 1!" });
  }
 
  updateContent2 = () => {
    this.setState({ message: "Clicked Marker Test 2!"});
}

updateContent3 = () => {
  this.setState({ message: "Clicked Marker Test 3!"});
}


  render() {
    return (
      <div>
        <h2 className="h2 bg-dark text-white text-center p-2">
        Click a Marker to see details!
          <element className = 'border'>{ this.state.message }</element>
        </h2>
        <div className="text-center">
          <button className="btn btn-dark" onClick={this.updateContent1}>
            Marker Test 1
          </button>
          <button className="btn btn-dark" onClick={this.updateContent2}>
            Marker Test 2
          </button>
          <button className="btn btn-dark" onClick={this.updateContent3}>
            Marker Test 3
          </button>
        </div>
      </div>
    );
  }
}
 
export default MarkerClick;
