import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './index.css';

const WorkView = () => {
    return (
        <section id='work-view'>
          <Container className='p-5'>
              <Row className='text-center'>
              <Element name='workElement' />
                <Col>
                  <h1 className='work-title p-3'>My Work.</h1>
                </Col>
              </Row>
              <Row className='m-5'>
                <Col md={6}>
                  <a href='https://browser-power.firebaseapp.com/'>
                  <div className='hover-effect rounded'>
                    <img 
                      src='https://github.com/twjsanderson/geoLocation-app/blob/master/src/assets/images/homePage.png?raw=true'
                      className='img-fluid rounded'
                      alt='browser power home page'
                    />
                    <div className='overlay'>
                      <h2>Browser Power</h2>
                      <p>A free educational tool designed to teach people how developers and hackers use web browsers to access their private data.</p>
                    </div>
                  </div>
                  </a>
                </Col>
              </Row>
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