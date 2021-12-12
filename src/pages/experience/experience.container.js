import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import { Element } from 'react-scroll';

// assets
import { projects } from '../../constants';

// styles
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './index.css'

const Experience = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    
    return (
        <Container fluid className='experience'>
            <Element name='workElement' />
            <Row>
                <Col className='d-flex justify-content-center text-center mb-4'>
                    <Slide right cascade>
                        <h3>My Work</h3>
                    </Slide>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center' >
                    <Carousel className='w-50' onSlide={(index) => setCurrentSlideIndex(index)}>
                        {
                            projects.map((project, index) => {
                                return <Carousel.Item key={index}>
                                    <img
                                        className='d-block w-100'
                                        src={project.imageLink}
                                        alt={project.imgAlt}
                                    />
                                </Carousel.Item>
                            })
                        }
                        
                    </Carousel>

                </Col>
            </Row>
            <Row className='m-3'>
                <Col className='d-flex justify-content-center text-center'>
                    <Slide right cascade>
                        <p className='w-50'>{projects[currentSlideIndex].text}</p>
                    </Slide>
               </Col>
            </Row>
        </Container>
    )
};

export default Experience;