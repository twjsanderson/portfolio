import React from 'react';
import { Container, Row, Col, Form, Button, } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './index.css';

const ContactView = ({ 
    FontAwesomeIcon,
    faCheckCircle, 
    faTimesCircle, 
    handleSubmit,
    email,
    setEmail,
    message,
    setMessage,
    error,
    success
}) => {
    return (
        <section id='contact-view'>
            <Container>
                <Row className='text-center'>
                    <Element name='contactElement' />
                    <Col>
                        <h2 className='contact-title type-font pt-5 pb-4'>Contact</h2>
                        
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex align-items-center justify-content-center type-font'>
                        <Form
                            style={{ width: '75%'}} 
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <Form.Group>
                                <Form.Label>
                                    <h3>Email</h3>
                                </Form.Label>
                                <Form.Control 
                                    type="email"
                                    name='email' 
                                    required 
                                    placeholder="Enter email" 
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} 
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    <h3>Message</h3>
                                </Form.Label>
                                <Form.Control
                                    as='textarea' 
                                    name='text'
                                    rows='5'
                                    required 
                                    placeholder="Enter Message" 
                                    value={message} 
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </Form.Group>

                            <Button 
                                className='about-contact-button'
                                type='submit' 
                                value='submit' 
                            >
                                Send
                            </Button>

                            {
                                error && success === false ? 
                                    <Row className='d-flex justify-content-center contact-error'>
                                        <FontAwesomeIcon 
                                            icon={faTimesCircle} 
                                            className='m-2'
                                            color='red' 
                                        /> 
                                        <h5 className='text-green p-1'>
                                            Oops looks like there was an error. Please try again.
                                        </h5> 
                                    </Row>
                                    : success === true ?
                                        <Row className='d-flex justify-content-center contact-error'>
                                            <FontAwesomeIcon 
                                                icon={faCheckCircle} 
                                                className='m-2'
                                                color='green' 
                                            /> 
                                            <h5 className='text-green p-1'>
                                                Success! Your message was sent.
                                            </h5> 
                                        </Row>
                                            : null
                            }

                        </Form>
                    </Col>
                </Row>
            </Container>      
        </section>
    )
};

export default ContactView;