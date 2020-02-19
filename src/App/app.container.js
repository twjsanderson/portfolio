import React, { useState } from 'react';
import { Nav, Navbar, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './app.css';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const App = () => {

  return (
    <section className='main'>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Tom Sanderson</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <Container fluid style={{ height: 700 }} className=''>
          <Row>
            <Col>
              <Typist 
                startDelay={1000} 
                cursor={{ show: false }}
                avgTypingDelay={200}
              >
              <Col className='p-3 h-100 d-flex justify-content-center'>
                <h1 className='main-title'>Tom Sanderson</h1>  
              </Col>
              <Typist.Delay ms={1000} />
              <Col className='p-3 h-100 d-flex justify-content-center'>
                <h1 className='main-title' style={{ textIndent: '2.5em' }}>Web Developer</h1>
              </Col>
              <Typist.Delay ms={1000} />
              <Col className='h-100 d-flex justify-content-center'>
                <span className='main-type'>H@ck3r</span>
                <Typist.Backspace count={5} delay={300} />
                <span className='main-retype'>acker</span>
              </Col>
              </Typist>
            </Col>
          </Row>
        </Container>
        <Container fluid className='h-100'>
          <Row>
            <Col className='h-100 d-flex justify-content-center'>
              <FontAwesomeIcon icon={faChevronDown} size='7x' />
            </Col>
          </Row>
        </Container>
        <Container style={{ height: 500}} className=''>
          <Row className='p-4 text-center'>
            <Col>
              <h1>
                Hi, I'm Tom, a Full-Stack Web Developer and an after hours Hacker. 
                </h1>
                <h2>
                  I am a passionate  
                </h2>
            </Col>
          </Row>
          <Row>
            <Col className='h-100'>
              Languages/Scripts
              <Row className='h-100 d-flex justify-content-center align-items-center'>
                <Col md={1} className='pt-2'>
                  <h4>HTML</h4>
                </Col>
                <Col md={10}>
                  <ProgressBar variant='dark' now={80} /> 
                </Col>
                <Col md={1} className='pt-2'>
                  <h4>80%</h4>
                </Col>
              </Row>
              CSS <ProgressBar variant='dark' now={70} />
              JavaScript <ProgressBar variant='dark' now={75} />
              Python <ProgressBar variant='dark' now={40} />
              Solidity <ProgressBar variant='dark' now={20} />
              Frameworks/Libraries 
              React <ProgressBar variant='dark' now={80} />
              Angular <ProgressBar variant='dark' now={30} />
              Node.js <ProgressBar variant='dark' now={75} />
              RubyOnRails <ProgressBar variant='dark' now={30} />
              Databases/Systems/CMS
              SQL <ProgressBar variant='dark' now={50} />
              MongoDB <ProgressBar variant='dark' now={65} />
              Git <ProgressBar variant='dark' now={80} />
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default App;