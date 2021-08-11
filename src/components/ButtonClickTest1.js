// ******** WE ARE NOT USING THIS FILE. BUT IT WORKS IN CASE WE NEED TO COME
// BACK TO IT. *******

import React, { Component } from 'react'


// ***** this was the initial rough draft for buttonclickedtest2 component. 
// can still be useful as a single button that updates state, however. ********


class ButtonClickTest1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Default Content"
    }
  }
 
  updateContent = () => {
      this.setState({ message: "Updated Content!"});
  }
 
  render() {
    return (
      <div>
        <h2 className="h1 bg-secondary text-white text-center p-2">
          { this.state.message }
        </h2>
        <div className="text-center">
          <button className="btn btn-secondary" onClick={this.updateContent}>
            Marker Test 1
          </button>
        </div>
      </div>
    );
  }
}
 
export default ButtonClickTest1;