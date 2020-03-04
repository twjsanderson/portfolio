import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './index.css';

// components
import ImageDisplay from '../../features/imageDisplay/ImageDisplay'; 

const WritingView = (props) => {
    const { articles } = props;

    return (
        <section id='writing-view'>
            <Container>
                <Row className='pt-5 pb-3 text-center'>
                    <Element name='writingElement' /> 
                    <Col>
                        <h1 className='writing-title'>Articles.</h1>
                    </Col>
                </Row>
                <Row className='p-3 text-center'>
                    <Col>
                        <h5 className='writing-text'>I like sharing knowledge and passing on ideas.</h5>
                    </Col>
                </Row>
                <ImageDisplay 
                    images={articles} 
                />
            </Container>
      </section>
    )
};

export default WritingView;