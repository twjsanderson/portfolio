import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

// constants
import { articles } from '../../constants';

const Writing = () => {
    return (
        <section id='writing'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={articles[0].website} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </section>
    )
};

export default Writing;