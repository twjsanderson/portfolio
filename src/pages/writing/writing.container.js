import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';

// constants
import { articles } from '../../constants';

// styles
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
                                        <p onClick={() => setShowPanel(prevState => prevState === null ? article.id : null)}>{article.title}</p>
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