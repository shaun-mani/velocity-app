import React from 'react'

// **** This is just a test, did not really work out ********

function Test() {
    function onButtonClickHandler () {
        window.alert('Hi')
    }
    
    return (
        <div>
            <button onClick={this.onButtonClickHandler}Enter></button>
        </div>
    )
}

export default Test
