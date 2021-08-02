import React, { Component } from 'react'
import './Timeline.css';


// ****** This is just a test for now ***

class ButtonClickTest2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Timeline Content!"
    }
  }
 
  updateContent1 = () => {
      this.setState({ message: "Phase 1 of Entrepreneurial Timeline!" });
  }
 
  updateContent2 = () => {
    this.setState({ message: "Phase 2 of Entrepreneurial Timeline!"});
}

updateContent3 = () => {
  this.setState({ message: "Phase 3 of Entrepreneurial Timeline!"});
}


  render() {
    return (
      <div>
        <h2 className="h2 bg-dark text-white text-center p-2">
            Follow your entrepreneurial journey with visual timeline!
          <element className = 'border-timeline'>{ this.state.message }</element>
        </h2>
        <div className="text-center">
          <button className="btn btn-dark" onClick={this.updateContent1}>
            Phase 1
          </button>
          <button className="btn btn-dark" onClick={this.updateContent2}>
            Phase 2
          </button>
          <button className="btn btn-dark" onClick={this.updateContent3}>
            Phase 3
          </button>
        </div>
      </div>
    );
  }
}
 
export default ButtonClickTest2;
