import React from 'react';
import Typist from 'react-typist';

// styles
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

const Main = () => {
    return (
        <Container fluid className='main'>
            <Row>
                <Col className='m-4'>
                    <Typist cursor={{ show: false }} avgTypingDelay={30}>
                        <h1 className='main-title'>Tom Sanderson</h1>
                        <h4>Software Developer</h4>
                        <h4>Content Creator</h4>
                        <h4>Instructor</h4>
                    </Typist>
                </Col>
            </Row>
        </Container>
    )
};

export default React.memo(Main);