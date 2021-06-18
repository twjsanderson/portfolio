import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

const NavigationView = ({ scrollToElement }) => {
    const scrolling = scrollToElement.scrollToElement;
    
    return (
        <section id='navigation-view'>
            <Navbar collapseOnSelect expand="true" variant='dark' className='nav-container justify-content-end'>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='align-items-center'>
                        <Nav.Link onClick={() => scrolling('aboutElement')}>About Me</Nav.Link>
                        <Nav.Link onClick={() => scrolling('skillsElement')}>My Work</Nav.Link>
                        <Nav.Link onClick={() => scrolling('writingElement')}>Writing</Nav.Link>
                        <Nav.Link onClick={() => scrolling('contactElement')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      </section>
    )
}

export default NavigationView;