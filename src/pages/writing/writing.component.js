import React from 'react';
import { Element } from 'react-scroll';

// Components
import ImageDisplay from '../../features/imageDisplay/ImageDisplay'; 

// Styles
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const WritingView = ({ articles }) => {
    return (
        <section id='writing-view'>
            <Container fluid className='p-5'>
                <Row className='text-center'>
                    <Element name='writingElement' /> 
                    <Col>
                        <h2 className='writing-title type-font p-3'>Writing</h2>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <ImageDisplay 
                        images={articles} 
                    />
                </Row>
            </Container>
      </section>
    )
};

export default WritingView;