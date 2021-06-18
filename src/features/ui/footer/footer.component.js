import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './index.css';

const FooterView = (props) => {
    const { FontAwesomeIcon, faGithubSquare, faLinkedin, faMedium } = props;

    return (
        <section id='footer'>
            <Navbar className='footer-container'>
                <Nav className='m-auto'>
                    <Button className='footer-button' href='https://github.com/twjsanderson'>
                        <FontAwesomeIcon  
                            icon={faGithubSquare} 
                            className='footer-icon' 
                        />
                    </Button>
                    <Button className='footer-button' href='https://www.linkedin.com/in/tom-sanderson-b6bb5084/'>
                        <FontAwesomeIcon  
                            icon={faLinkedin} 
                            className='footer-icon' 
                        />
                    </Button>
                    <Button className='footer-button' href='https://medium.com/@tom.w.j.sanderson'>
                        <FontAwesomeIcon  
                        icon={faMedium} 
                        className='footer-icon' 
                        />
                    </Button>
                </Nav>
            </Navbar>
        </section>
    )
}

export default FooterView;