import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// constants
import { contacts } from '../../constants/index';

// styles
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const Contact = () => {
    const [showIcon, setShowIcon] = useState(null);

    return (
        <section className='contact'>
            <Container className='mb-5'>
                <Element name='contactElement' />
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <h3>Interested in working together?</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center my-3'>
                        <h5>Connect with me on one of the following platforms</h5>
                    </Col>
                </Row>
                <Row>
                {
                    contacts.map(contact => {
                        return (
                            <Col key={contact.id} className='d-flex justify-content-center mt-3'>
                                    <FontAwesomeIcon  
                                        icon={contact.icon} 
                                        className='contact-icon' 
                                        onMouseEnter={() => setShowIcon(contact.id)}
                                        onMouseLeave={() => setShowIcon(null)}
                                    />
                            </Col>
                        )
                    })
                }
                </Row>
                {
                    showIcon !== null ?
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <h4 className='contact-icon-text'>{contacts[showIcon - 1].text}</h4>
                            </Col>
                        </Row> :
                            null
                }
            </Container>
        </section>
    )
}

export default Contact;