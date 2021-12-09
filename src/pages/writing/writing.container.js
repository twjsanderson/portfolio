import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';

// constants
import { articles } from '../../constants';

// styles
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import './index.css';

const Writing = () => {
    const [showPanel, setShowPanel] = useState(null);

    return (
        <Container className='writing'>
            <Row>
                <Col className='d-flex justify-content-center text-center mb-3'>
                    <Slide right cascade>
                        <h3>My Writing</h3>
                    </Slide>
                </Col>
            </Row>
            <Row>
                {
                    articles
                        .filter(article => {
                            return showPanel === null || article.id === showPanel
                        })
                        .map(article => {
                            return (
                                <Col key={article.id} className='d-flex justify-content-center'>
                                    <Slide right cascade>
                                            <div 
                                                className='thumbnail' 
                                                onClick={() => setShowPanel(prevState => prevState === null ? article.id : null)}>
                                                <Image 
                                                    className='img' 
                                                    src={article.image} 
                                                    alt={article.imgAlt} 
                                                />
                                                <div className='caption'>
                                                    <p>contacto@windberg.cl</p>
                                                    <p>+56983874071   |   +56228231294</p>
                                                    <p>El Aguilucho 3174, Providencia, Región Metropolitana</p>
                                                </div>
                                            </div>
                                    </Slide>
                                </Col>
                            )
                        })
                }
            </Row>
        </Container>
    )
};

export default Writing;