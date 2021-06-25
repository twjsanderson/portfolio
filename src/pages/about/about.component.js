import React from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import BackgroundVideo from '../../features/ui/backgroundVideo/backgroundVideo.container';
import './index.css';
import { Element } from 'react-scroll';
import code from '../../assets/video/code.mp4';


const AboutView = ({ portfolio, scrollToElement }) => {
    const scroller = scrollToElement.scrollToElement;

    return (
        <section id='about-view'>
            <BackgroundVideo 
                videoSource={code}
            >
            <Container className='about-content p-5'>
                <Row className='text-center'>
                    <Col>
                        <Element name='aboutElement'></Element>
                        <h1 className='about-title p-5'>
                            Hi, I'm Tom. 
                        </h1>
                    </Col>
                </Row>
                <Row className='p-3 text-center'>
                    <Col md={6} className=''>
                        <img
                            src={portfolio}
                            className='about-img rounded'
                            alt='portrait'
                        />
                    </Col>
                    <Col md={6}>
                        <h1 className='pb-3 pt-1'>
                            Full-Stack Web Developer.
                            Part-Time Hacker.
                        </h1>
                        <h2 className='p-2'>
                            Whether I am designing a custom landing page, building an API integration or testing the 
                            security of a website, I always create lasting value for my clients. 
                        </h2>
                        <h2 className='p-2'>
                            Have a problem that needs to be solved?
                        </h2>
                        <Button
                            onClick={() => scroller('contact')}
                            className='experience-button m-3'
                        >
                            Let's Chat
                        </Button>
                    </Col>
                </Row>
            </Container>
            </BackgroundVideo>
        </section>
    )
};

export default AboutView;