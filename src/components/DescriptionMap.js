import React from 'react'
import Card from 'react-bootstrap/Card'
import './DescriptionMap.css'

function DescriptionMap() {
    return (
        <div>
            <table>
    <tr> 
        <td class="color1"></td>
        <td class="color2"></td>
        <td class="color3"></td>
        <td class="color4"></td>
    </tr>
        </table>    
           <Card className="full-card" bg='success' text='light' >
           <Card.Body>
                <Card.Title> Welcome to the Entrepreneurship Ecosystem Map: Your Home for All Your Entrepreneurial Needs!</Card.Title>
                    <Card.Text>
                        *Add map description here that tells the user what this website does and how to use it* @team
                        (talk about clicking the markers for info, the filtering by keyword, and also how the timeline works) 
                        if someone can do this that'd be much appreciated!!!
                    </Card.Text>
  </Card.Body>
           </Card>
        </div>
    )
}

export default DescriptionMap



