import React from 'react';
import { Element } from 'react-scroll';

// Components
import ImageDisplay from '../../features/imageDisplay/ImageDisplay';

// Styles
import { Container, Row, Col, Button } from 'react-bootstrap';
import './index.css';

const WorkView = ({ projects }) => {
  return (
    <section id='work-view'>
      <Container className='p-5'>
        <Row className='text-center'>
          <Element name='workElement' />
          <Col>
            <h1 className='work-title p-3'>My Work</h1>
          </Col>
        </Row>
        <ImageDisplay 
          images={projects} 
        />
      </Container>
    </section>
  )
};

export default WorkView;