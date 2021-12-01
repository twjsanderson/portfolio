import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

// assets
import profile from '../../assets/images/profile.jpg';
import node from '../../assets/images/node.png';
import psql from '../../assets/images/psql.png';
import react from '../../assets/images/react.png';
import javascript from '../../assets/images/javascript.png';
import typescript from '../../assets/images/typescript.png';
import firebase from '../../assets/images/firebase.png';
import git from '../../assets/images/git.png';
import npm from '../../assets/images/npm.png';

// styles
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import './index.css';

const About = () => {
    const [techStack, setTechStack] = useState(false);

    const showTechStack = () => setTechStack(!techStack);

    return (
        <Container fluid className='about'>
            <Row className='d-flex justify-content-center'>
                <Col md={4} lg={3} className='mt-2'>
                    <Slide right>
                        <Card className='about-card'>
                            <Card.Img 
                                src={profile} 
                            />
                        </Card>
                    </Slide>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col md={6} className='text-center'>
                    <Slide right>
                        <p className='about-text'>
                            My name is Tom and I solve interesting problems with code. 
                            I have over 3 years experience building software for entreprenuers, startups and government agencies.
                            I love collaborating with passionate people on projects they truly care about. 
                        </p>
                        <p className='about-text mt-4'> 
                            On the side, I share my enthusiasm for software development by teaching &amp; mentoring the next generation of web developers.
                            When I have spare time (which is rare), I write technical articles and create tutorials to help others improve their skills.
                        </p>
                    </Slide>
                    {
                        !techStack ?
                            <Slide right>
                                <Button 
                                    variant='danger'
                                    className='m-3'
                                    onClick={showTechStack}
                                >
                                    My Tech Stack
                                </Button>
                            </Slide> :
                                null
                    }
                </Col>
            </Row>
            <Row className='text-center mt-5'>
                    {
                        techStack ?
                        <>
                            <Col md={3} className='d-flex justify-content-center'>
                                <Fade right cascade>
                                    <Image
                                        className='w-50 m-2'
                                        src={javascript} 
                                    />
                                </Fade> 
                                <Fade right cascade>
                                    <Image
                                        className='w-50 m-2'
                                        src={typescript} 
                                    />
                                </Fade> 
                            </Col> 
                            <Col md={3} className='d-flex justify-content-center'>
                                <Fade right cascade>
                                    <Image
                                        className='w-50 m-2'
                                        src={react} 
                                    />
                                </Fade> 
                                <Fade right cascade>
                                    <Image
                                        className='w-50 m-2'
                                        src={node} 
                                    />
                                </Fade> 
                            </Col>
                            <Col md={3} className='d-flex justify-content-center'>
                                <Fade right cascade>
                                    <Image
                                        className='w-50 m-2'
                                        src={psql} 
                                    />
                                </Fade> 
                                <Fade right cascade>
                                    <Image
                                        className='w-50 m-2'
                                        src={firebase} 
                                    />
                                </Fade> 
                            </Col>
                            <Col md={3} className='d-flex justify-content-center'>
                                <Fade right cascade>
                                    <Image
                                        className='w-50 m-2'
                                        src={git} 
                                    />
                                </Fade> 
                                <Fade right cascade>
                                    <Image
                                        className='w-50 m-2'
                                        src={npm} 
                                    />
                                </Fade>
                            </Col>

                        </>:
                                null
                    }
            </Row>
        </Container>
    )
};

export default About;