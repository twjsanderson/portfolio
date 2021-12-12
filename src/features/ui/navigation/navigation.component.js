import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

const NavigationView = ({ scrollToElement }) => {
    const [navExpanded, setNavExpanded] = useState(false);

    return (
        <section id='navigation-view'>
            <Navbar 
                onToggle={() => setNavExpanded(!navExpanded)}
                expanded={navExpanded} 
                collapseOnSelect 
                expand='true' 
                variant='dark' 
                className='nav-container justify-content-end'
            >
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='align-items-center'>
                        <Nav.Link 
                            onClick={() => {
                                scrollToElement('aboutElement')
                                setNavExpanded(!navExpanded)
                            }}
                        >
                            About Me
                        </Nav.Link>
                        <Nav.Link 
                            onClick={() => {
                                scrollToElement('workElement')
                                setNavExpanded(!navExpanded)
                            }}
                        >
                            My Work
                        </Nav.Link>
                        <Nav.Link 
                            onClick={() => {
                                scrollToElement('articlesElement')
                                setNavExpanded(!navExpanded)
                            }}
                        >
                            Articles
                        </Nav.Link>
                        <Nav.Link 
                            onClick={() => {
                                scrollToElement('contactElement')
                                setNavExpanded(!navExpanded)
                            }}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      </section>
    )
}

export default NavigationView;