import React from 'react';
import Slide from 'react-reveal/Slide';

// constants
import { articles } from '../../constants';

// styles
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
                            <Col key={article.id}  className='d-flex justify-content-center'>
                                <Slide right cascade>
                                    <Card className='my-3 writing-card'>
                                        <Card.Img variant='top' src={article.image} alt={article.imgAlt} />
                                        <Card.Body>
                                            <Card.Title>{article.title}</Card.Title>
                                            <Card.Text>{article.text}</Card.Text>
                                            <Button variant='danger' onClick={() => window.open(article.website)}>Read Article</Button>
                                        </Card.Body>
                                    </Card>
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