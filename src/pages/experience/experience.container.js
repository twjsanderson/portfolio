import React, { useState } from 'react';

// assets
import { projects } from '../../constants';

// images
import scrimger_homepage from '../../assets/images/scrimger_homepage.png';
import glowinme_portal_home from '../../assets/images/glowinme_portal_home.png';
import candidly from '../../assets/images/candidly.png';
import zenduit from '../../assets/images/zenduit.png';

// styles
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import './index.css'

const Experience = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
             <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.nicesnippets.com/upload/thumbnail/month.png"
                    alt="First slide"
                />
                <Carousel.Caption className='cap'>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.nicesnippets.com/upload/thumbnail/year.png"
                    alt="Third slide"
                />
            
                <Carousel.Caption className='cap'>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.nicesnippets.com/upload/thumbnail/footer-social-icon-design-example-using-bootstrap-4.png"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
};

export default Experience;