import React from 'react';
import { Element } from 'react-scroll';

// Components
import ImageDisplay from '../../features/imageDisplay/ImageDisplay';

// Styles
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const WorkView = ({ projects }) => {
  return (
    <section id='work-view'>
      <Container fluid className='p-5'>
        <Row className='text-center'>
          <Element name='workElement' />
          <Col>
            <h2 className='work-title type-font p-3'>My Work</h2>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <ImageDisplay 
            images={projects} 
          />
        </Row>
      </Container>
    </section>
  )
};

export default WorkView;