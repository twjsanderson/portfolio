import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './index.css';

// components
import ImageDisplay from '../../features/imageDisplay/ImageDisplay';

const WorkView = (props) => {
  const { projects } = props;

  return (
    <section id='work-view'>
      <Container className='p-5'>
        <Row className='text-center'>
          <Element name='workElement' />
          <Col>
            <h1 className='work-title p-3'>My Work.</h1>
          </Col>
        </Row>
        <ImageDisplay 
          images={projects} 
        />
        <Row className='text-center d-flex justify-content-center'>
          <Col className='m-5 p-4' md={5}>
            <Button className='experience-button' href='https://github.com/twjsanderson'>Checkout my code on Github</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default WorkView;