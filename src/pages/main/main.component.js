import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';
import Typist from 'react-typist';
// import Anime from 'react-anime';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const MainView = (props) => {
    const { scrollToElement } = props;
    const scroller = scrollToElement.scrollToElement; 

    return (
        <section id='main-view'>
            <Container fluid className='main-container'>
                <Row>
                    <Col className='main-title-div'>
                        <div>
                            <h1 className='main-title title-name'>Tom <br /> Sanderson</h1>
                        </div>
                    </Col>
                    <Col className='main-type-col'>
                        <Typist 
                            startDelay={4000} 
                            cursor={{ show: false }}
                            avgTypingDelay={40}
                        >
                            <Col className='main-type-text type-font'>
                                <p>const main = () {'=> {'}</p> 
                                    <p style={{textIndent:'2.5rem'}}>Tech Writer</p>
                                    <p style={{textIndent:'2.5rem'}}>Mentor</p>
                                <p>{"};"}</p> 
                            </Col>
                        </Typist>
                        {/* <Col className=' d-flex justify-content-center'>
                            <Anime 
                                delay={1000} 
                                duration={1000}
                            >
                                <FontAwesomeIcon 
                                    onClick={() => scroller('aboutElement')} 
                                    icon={faChevronDown} 
                                    className='main-icon' 
                                />
                            </Anime>
                        </Col> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default MainView;