import React from 'react'
import Card from 'react-bootstrap/Card'
import './DescriptionMap.css'

// function DescriptionMap is the description of the website, explaining
// the functionality and way to use the website
function DescriptionMap() {
    return (
        <div>
            {/* this is for the UWaterloo header-border colour scheme */}
            <table>
        <td class="color1"></td>
        <td class="color2"></td>
        <td class="color3"></td>
        <td class="color4"></td>
        </table>  <br/>
         
        {/* This is the title card for the Website Description */}
        <Card className="full-card-title" bg='warning' text='dark' >
           <Card.Body>
                <Card.Title> 
                    <h2>
                    Welcome to the Entrepreneurship Ecosystem Map: Your Home for All Your UW Entrepreneurial Needs!
                    </h2>
                </Card.Title>
            </Card.Body>
        </Card>            

            {/* This is the text card for the Website Description */}
           <Card className="full-card" bg='dark' text='light' >
           <Card.Body>
                    <Card.Text>
                        <h4>
                            This is a comprehensive, interactive map of all the entrepreneurial resources offered by the University of Waterloo on-campus. The map below individually targets your needs, whether you search under a specific category or use our timeline to display the resources that align with each stage in your entrepreneurial journey. 
                        </h4>
                    </Card.Text>
                    <Card.Text>
                        <h4>
                            This website is a great place to discover new and upcoming resources and learn about where they reside on campus! 
                        </h4>
                    </Card.Text>
            </Card.Body>
           </Card>
        </div>
    )
}

export default DescriptionMap



