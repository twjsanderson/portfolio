import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

const NavigationView = ({ scrollToElement }) => {
    
    return (
        <section id='navigation-view'>
            <Navbar collapseOnSelect expand="true" variant='dark' className='nav-container justify-content-end'>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='align-items-center'>
                        <Nav.Link onClick={() => scrollToElement('aboutElement')}>About Me</Nav.Link>
                        <Nav.Link onClick={() => scrollToElement('workElement')}>My Work</Nav.Link>
                        <Nav.Link onClick={() => scrollToElement('writingElement')}>Writing</Nav.Link>
                        <Nav.Link onClick={() => scrollToElement('contactElement')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      </section>
    )
}

export default NavigationView;