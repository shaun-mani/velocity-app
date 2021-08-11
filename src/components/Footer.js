import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h4>Concept by Velocity</h4>
                        <ul className="list-unstyled">
                            <li>South Campus Hall, 200 University Ave W 2nd Floor</li>
                            <li>Waterloo, Ontario</li>
                            <li>N2L 3G1</li>
                            <a href="https://concept.uwaterloo.ca/"> Concept Website</a>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col">
                        <h4>University of Waterloo</h4>
                        <ul className="list-unstyled">
                            
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col">
                        <h4>Resources</h4>
                        <ul className="list-unstyled">
                        <a href="https://concept.uwaterloo.ca/about-us/contact-concept/">Contact Us</a>
                            <li>Help</li>
                            <a href="http://maps.google.com">Google Maps</a>
                        </ul>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} CONCEPT BY VELOCITY | All rights reserved | Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
