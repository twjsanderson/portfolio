import React, { useState } from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import './app.css';
import Typist from 'react-typist';


const App = () => {

  return (
    <section className="main">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Tom Sanderson</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <Container fluid className='text-center'>
          <Row>
            <Col>
              <Typist 
                startDelay={1000} 
                cursor={{ show: false }}
                avgTypingDelay={200}
              >
                <h1>Tom Sanderson</h1>  
                <Typist.Delay ms={1000} />
                <h1 style={{ textIndent: '2.5em' }}>Web Developer</h1>
                <Typist.Delay ms={1000} />
                <span id='main-title' style={{ textIndent: '5em' }}>H@ck3r</span>
                <Typist.Backspace count={5} delay={300} />
                <span id='main-title' style={{ textIndent: '5em' }}>acker</span>
              </Typist>
            </Col>
          </Row>
        </Container>
        <Container fluid className='h-100'>
          <Row>
            <Col>
            {/* <h2>fnsjknfdksn;</h2> */}
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default App;