import React, { Component } from 'react'
import './Timeline.css';
import Button from 'react-bootstrap/Button';


// ****** This is just a test for now ***

class ButtonClickTest2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Timeline Content!"
    }
  }
 
  updateContent1 = () => {
      this.setState({ message: "Phase 1 of Your Entrepreneurial Timeline!" });
  }
 
  updateContent2 = () => {
    this.setState({ message: "Phase 2 of Your Entrepreneurial Timeline!"});
}

updateContent3 = () => {
  this.setState({ message: "Phase 3 of Your Entrepreneurial Timeline!"});
}

updateContent4 = () => {
  this.setState({ message: "Phase 4 of Your Entrepreneurial Timeline!"});
}

updateContent5 = () => {
  this.setState({ message: "Phase 5 of Your Entrepreneurial Timeline!"});
}



  render() {
    return (
      <div>

        <div className="text-center">
          <Button variant="outline-dark" onClick={this.updateContent1}>
            1. Getting Started
          </Button>
          <Button variant="outline-dark" onClick={this.updateContent2}>
            2. Early Stage & problem Identification
          </Button>
          <Button variant="outline-dark" onClick={this.updateContent3}>
            3. Building & Testing Your Idea
          </Button>
          <Button variant="outline-dark" onClick={this.updateContent4}>
            4. Funding & Competitions
          </Button>
          <Button variant="outline-dark" onClick={this.updateContent5}>
            5. Starting Up & Launching 
          </Button>
        </div>
      </div>
    );
  }
}
 
export default ButtonClickTest2;
