import React from 'react'
import Card from 'react-bootstrap/Card'
import './DescriptionMap.css'

function DescriptionMap() {
    return (
        <div>
            <table>
        <td class="color1"></td>
        <td class="color2"></td>
        <td class="color3"></td>
        <td class="color4"></td>
        </table>  <br/>
         

        <Card className="full-card-title" bg='warning' text='dark' >
           <Card.Body>
                <Card.Title> 
                    <h2>
                    Welcome to the Entrepreneurship Ecosystem Map: Your Home for All Your UW Entrepreneurial Needs!
                    </h2>
                </Card.Title>
            </Card.Body>
        </Card>            


           <Card className="full-card" bg='dark' text='light' >
           <Card.Body>
                    <Card.Text>
                        <h4>
                            It is a comprehensive, interactive map of all the entrepreneurship resources the University of Waterloo offers on-campus. This map individually targets your needs, whether it is searching under a specific category or displaying the resources that align with the stage you're in your entrepreneurial journey. 
                        </h4>
                    </Card.Text>
                    <Card.Text>
                        <h4>
                            This website is a great place to discover new and upcoming resources and learning about where they reside on campus! 
                        </h4>
                    </Card.Text>
            </Card.Body>
           </Card>
        </div>
    )
}

export default DescriptionMap



