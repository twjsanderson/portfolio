import React from 'react';
import Typist from 'react-typist';

// Styles
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const MainView = () => {
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
                            cursor={{ show: false }}
                            avgTypingDelay={40}
                        >
                            <Col className='main-type-text type-font'>
                                <h3>{'>'} loadDevProfile(tom_sanderson)</h3> 
                                <h3>Initializing...</h3>
                                <h3>Loading Profile Data...</h3>
                                <h3>Building Interface...</h3>
                                <h3>Success! Completed on {new Date().toString()}</h3>
                                <h3>Scroll down to begin.</h3>

                            </Col>
                        </Typist>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default React.memo(MainView);