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
                            <li>342-420-6969</li>
                            <li>Waterloo, Ontario</li>
                            <li>123 Street South</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col">
                       
                        <ul className="list-unstyled">
                            
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            
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
