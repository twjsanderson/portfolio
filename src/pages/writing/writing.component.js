import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './index.css';

const WritingView = () => {
    return (
        <section id='writing-view'>
            <Container>
                <Row className='pt-5 pb-3 text-center'>
                    <Element name='writingElement' /> 
                    <Col>
                        <h1 className='writing-title'>Articles.</h1>
                    </Col>
                </Row>
                <Row className='p-3 text-center'>
                    <Col>
                        <h5 className='writing-text'>I like sharing knowledge and passing on ideas.</h5>
                    </Col>
                </Row>
                <Row className='m-5'>
                    <Col md={6}>
                        <a href='https://medium.com/@tom.w.j.sanderson/a-practical-guide-to-technical-tests-for-junior-devs-part-1-7890b5689c0'>
                            <div className='hover-effect rounded'>
                                <img 
                                    src='https://miro.medium.com/max/6016/0*qmElKbRUIq2D7mFx'
                                    className='img-fluid rounded'
                                    alt='technical test part 1'
                                />
                                <div className='overlay'>
                                    <h2>A Practical Guide to Technical Tests (For Junior Devs): Part I</h2>
                                    <p>
                                        The first part of a guide that teaches junior developers how to approach 
                                        technical tests and solve coding problems. 
                                    </p>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
      </section>
    )
};

export default WritingView;