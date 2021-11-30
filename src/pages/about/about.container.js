import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';

// assets
import profile from '../../assets/images/profile.jpg';

// styles
import { Container, Row, Col, Card } from 'react-bootstrap';
import './index.css';

const About = () => {

    return (
        <Container fluid className='about'>
            <Row>
                <Col md={4}>
                    <Card className='about-card'>
                        <Card.Img 
                            
                            src={profile} 
                        />

                    </Card>
                </Col>
                <Col className='m-4'>
                    <Slide left>
                        <p className='about-text'>
                            My name is Tom and I solve problems with code. 
                            I have over 3 years experience building software for entreprenuers, startups and government agencies.
                            I love collaborating with passionate people on projects they truly care about. 
                        </p>
                        <p className='about-text'> 
                            On the side, I share my enthusiam for software development by teaching &amp; mentoring the next generation of web developers.
                            When I have spare time (which is rare), I write tech articles and create tutorials to help others improve their skills.
                        </p>
                        <h1></h1>
                    </Slide>
               </Col>
            </Row>
        </Container>
    )
};

export default About;