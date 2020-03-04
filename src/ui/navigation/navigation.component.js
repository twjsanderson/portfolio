import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

const NavigationView = (props) => {
    const { scrollToElement } = props;
    const scrolling = scrollToElement.scrollToElement;
    
    return (
        <section id='navigation-view'>
            <Navbar collapseOnSelect expand="lg" variant='dark' className='nav-container'>
                <Navbar.Brand>Tom Sanderson</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Link onClick={() => scrolling('aboutElement')}>About</Nav.Link>
                        <Nav.Link onClick={() => scrolling('skillsElement')}>Skills</Nav.Link>
                        <Nav.Link onClick={() => scrolling('workElement')}>Projects</Nav.Link>
                        <Nav.Link onClick={() => scrolling('experienceElement')}>Resume</Nav.Link>
                        <Nav.Link onClick={() => scrolling('writingElement')}>Articles</Nav.Link>
                        <Nav.Link onClick={() => scrolling('contactElement')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      </section>
    )
}

export default NavigationView;