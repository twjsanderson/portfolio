import React from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import './index.css';
import { Element } from 'react-scroll';


const ExperienceView = (props) => {
    const { pdf, jobs } = props;
    
    return (
        <section id='experience-view'>
            <Container>
                <Row className='text-center p-2'>
                    <Element name='experienceElement' />
                    <Col>
                        <h1 className='pt-5 experience-title'>Resume.</h1>
                    </Col>
                </Row>
                {
                    jobs.map((job, index) => {
                        return ( 
                            <Row className='experience-row p-3 rounded' key={index}>
                                <Col className='experience-col'>
                                    <div className='experience-hover p-2 rounded'>
                                        <h2>{job.title}</h2>
                                        <h4>{job.dates}</h4>
                                    </div>
                                    <p className='experience-text p-4 m-2'>{job.text}</p>
                                </Col>
                            </Row>
                        )
                    })
                }   
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