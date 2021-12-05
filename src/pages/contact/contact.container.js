import React from 'react';

// styles
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import './index.css';

const Contact = () => {
    return (
        <>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h3>Interested in working together?</h3>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center my-3'>
                    <h5>Connect with me on one of the following plaforms</h5>
                </Col>
            </Row>
        </>
    )
}

export default Contact;