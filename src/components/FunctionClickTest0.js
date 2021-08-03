import React from 'react'

// **** This is the button that says 'Marker consolelog'. This marker shows a message
// in the browser 'Button Clicked' *********

function Functionclick() {
    function clickHandler () {
        console.log('Button Clicked')
        // ^check browser to see console log
    }
    
    return (
        <div>
            <button onClick = { clickHandler }>Marker consolelog</button>
        </div>
    )
}

export default Functionclick
