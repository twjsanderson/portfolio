import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';
import Typist from 'react-typist';
import Anime from 'react-anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const MainView = (props) => {
    const { scrollToElement } = props;
    const scroller = scrollToElement.scrollToElement; 

    return (
        <section id='main-view'>
            <Container fluid className='main-container'>
                <Row>
                    <Col>
                        <Typist 
                            startDelay={300} 
                            cursor={{ show: false }}
                            avgTypingDelay={100}
                        >
                            <Col className='p-3 h-100 d-flex justify-content-center'>
                                <h1 className='main-title'>Tom Sanderson.</h1>  
                            </Col>
                            <Typist.Delay ms={500} />
                            <Col className='p-3 h-100 d-flex justify-content-center'>
                                <h1 className='main-title' style={{ textIndent: '2.5em' }}>Web Developer.</h1>
                            </Col>
                            <Typist.Delay ms={500} />
                            <Col className='h-100 d-flex justify-content-center'>
                                <span className='main-type'>H@ck3r.</span>
                                <Typist.Backspace 
                                    count={6} 
                                    delay={150} 
                                />
                                <span className='main-retype'>acker.</span>
                            </Col>
                        </Typist>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='h-100'>
                <Row className='h-100'>
                    <Col className='h-100 d-flex justify-content-center'>
                        <Anime 
                            rotateX={360} 
                            delay={7000} 
                            duration={5000}
                        >
                            <FontAwesomeIcon 
                                onClick={() => scroller('aboutElement')} 
                                icon={faChevronDown} 
                                className='main-icon' 
                            />
                        </Anime>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default MainView;