import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

// assets
import { projects } from '../../constants';

// styles
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import './index.css'

const Experience = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    
    return (
        <Container fluid>
            <Row className='m-3'>
                <Col className='d-flex justify-content-center text-center'>
                    <Fade right cascade>
                        <h3 className='w-50'>{projects[currentSlideIndex].title}</h3>
                    </Fade>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center' >
                    <Carousel className='w-75' onSlide={(index) => setCurrentSlideIndex(index)}>
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
                    <Fade right cascade>
                        <p className='w-50'>{projects[currentSlideIndex].text}</p>
                    </Fade>
               </Col>
            </Row>
        </Container>
    )
};

export default Experience;