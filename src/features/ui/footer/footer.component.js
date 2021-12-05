import React from 'react';
import { Navbar, Nav, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './index.css';

const FooterView = ({ FontAwesomeIcon, faGithubSquare, faLinkedin, faMedium } ) => {
    return (
        <section id='footer'>
            <Navbar className='footer-container'>
                <Nav className='m-auto'>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Checkout my Github Profile</Tooltip>}>
                        <Button className='footer-button' href='https://github.com/twjsanderson'>
                            <FontAwesomeIcon  
                                icon={faGithubSquare} 
                                className='footer-icon' 
                            />
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Send me a message on LinkedIn</Tooltip>}>
                        <Button className='footer-button' href='https://www.linkedin.com/in/tom-sanderson-b6bb5084/'>
                            <FontAwesomeIcon  
                                icon={faLinkedin} 
                                className='footer-icon' 
                            />
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Read more of my articles on Medium.com</Tooltip>}>
                        <Button className='footer-button' href='https://medium.com/@tom-w-j-sanderson'>
                            <FontAwesomeIcon  
                            icon={faMedium} 
                            className='footer-icon' 
                            />
                        </Button>
                    </OverlayTrigger>
                </Nav>
            </Navbar>
        </section>
    )
}

export default FooterView;