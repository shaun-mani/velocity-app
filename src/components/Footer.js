import React from 'react'
import './Footer.css'

// Footer Function
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h4>Concept by Velocity</h4>
                        {/* created un-order lists to display each line */}
                        <ul className="list-unstyled">
                            <li>South Campus Hall, 200 University Ave W 2nd Floor</li>
                            <li>Waterloo, ON, N2L 3G1</li>
                            <a className = "link-F" href="https://concept.uwaterloo.ca/"> Concept Website</a>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col">
                        <h4>Credits</h4>
                        <ul className="list-unstyled">
                            {/* Added our Names included with our LinkedIn's */}
                            <a className = "link-F" href="https://www.linkedin.com/in/lcabreraortiz/">Leonardo Cabrera Ortiz</a>
                            <a className = "link-F" href="https://www.linkedin.com/in/shaun-mani-8428a7218/">Shaun Mani</a>
                            <a className = "link-F" href="https://www.linkedin.com/in/jaylon-laidlaw-04485b203/">Jaylon Laidlaw</a>
                            <a className = "link-F" href="https://www.linkedin.com/in/mukund-rana-2938051b1/">Mukund Rana</a>
                            <a className = "link-F" href="https://www.linkedin.com/in/jackieliu-uwaterloo/">Jackie Liu</a>
                            {/* icons need to be cited (the one next to 'all categories' and the one next to 'what stage are you in your entrepreneural journey?') */}
                            <div>Icons made by <a className = "link-F" href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a className = "link-F" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col">
                        <h4>Resources</h4>
                        <ul className="list-unstyled">
                        <a className = "link-F" href="https://concept.uwaterloo.ca/about-us/contact-concept/">Contact Us</a>
                            <li>Help</li>
                            <a className = "link-F" href="http://maps.google.com">Google Maps</a>
                            
                        </ul>
                    </div>
                    <hr />
                    {/* Line seperator at bottom of footer */}
                    <div className="row">
                        <p className="col-sm">
                            {/* Bottom Line at footer */}
                            &copy;{new Date().getFullYear()} CONCEPT BY VELOCITY | All rights reserved | Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
