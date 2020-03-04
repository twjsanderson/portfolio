import React from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import './index.css';
import { Element } from 'react-scroll';


const ExperienceView = (props) => {
    const { pdf } = props;
    
    return (
        <section id='experience-view'>
            <Container>
                <Row className='text-center p-5'>
                    <Element name='experienceElement' />
                    <Col>
                        <h1 className='p-3 experience-title'>Resume.</h1>
                    </Col>
                </Row>
                <Row className='experience-row p-3 m-5 rounded'>
                    <Col className='experience-col'>
                        <div className='experience-hover p-2 rounded'>
                            <h2>Freelance Web Developer</h2>
                            <h4>Sep. 2019 - Present</h4>
                        </div>
                        <p className='experience-text p-2'>
                            I build stand alone websites and applications for clients from around the world. Using modern technologies like React and Node.js I 
                            build extensible, fully customized platforms for e-commerce and service based businesses. I also consult for start ups
                            looking to build out their digital infrastructure and automate critical operations. 
                        </p>
                    </Col>
                </Row>
                <Row className='experience-row p-3 m-5 rounded'>
                    <Col className='experience-col'>
                        <div className='experience-hover p-2 rounded'>
                            <h2>Junior Developer @ ZenduIt</h2>
                            <h4>Feb. 2019 - Sep. 2019</h4>
                        </div>
                        <p className='experience-text p-4'>
                            Built unit tests for legacy codebases and new projects. Fixed bugs in live applications and assisted with QA. I was given the 
                            opportunity to build an API integration for a client using Node.js and Typescript. The application was a stand 
                            alone server connecting realtime data feeds from emergency vehicles to a proprietary API owned by the client. 
                        </p>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <Col>
                        <Button
                            href={pdf}
                            target='_blank'
                            className='experience-button m-5'
                        >
                            Download My Resume
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default ExperienceView;