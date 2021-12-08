import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';

// constants
import { articles } from '../../constants';

// styles
import { Container, Row, Col, Image } from 'react-bootstrap';
import './index.css';

const Writing = () => {
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
                    articles.map(article => {
                        return (
                            <Col 
                                key={article.id}  
                                className='d-flex justify-content-center'
                            >
                                <Image 
                                    className='writing-img' 
                                    src={article.image} 
                                    alt={article.imgAlt} 
                                />
                            </Col>
                        )
                    })
                }
            </Row>

        </Container>
    )
};

export default Writing;