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
                <Col className='d-flex justify-content-center text-center mb-4'>
                    <Slide right cascade>
                        <h3>My Writing</h3>
                    </Slide>
                </Col>
            </Row>
            <Row className='text-center mb-4'>
                {
                    articles
                        .filter(article => {
                            return (showPanel === null || article.id === showPanel)
                        })
                        .map(article => {
                            return (
                                <Col 
                                    md={showPanel === null ? 4 : null} 
                                    className='d-flex justify-content-center' 
                                    key={article.id}
                                    onClick={() => showPanel === null ? setShowPanel(article.id) : setShowPanel(null)} 
                                >
                                    <Image
                                        className={showPanel === null ? 'writing-img-grid' : 'writing-img-single'}
                                        src={article.image} 
                                        alt={article.imgAlt} 
                                    />
                                    <h4 className='writing-title'>{article.title}</h4>
                                </Col>
                            )
                        })
                }
            </Row>
        </Container>
    )
};

export default Writing;