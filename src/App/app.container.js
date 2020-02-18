import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import './app.css';

// images
import codeSnippet from '../assets/images/codeSnippet2.png';
import kaliImage from '../assets/images/kali1.png'

function App() {
  
  return (
    <section className="main">
      
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>

      {/* <h1>Nav</h1>
        <h1>Home</h1>
        <h1>About Me</h1>
        <h1>My Work</h1>
        <h1>How I Create</h1>
        <h1>Tutorials</h1>
        <h1>Contact</h1>
      <h1>Footer</h1> */}
        <Row noGutters className='overlay-div'>
          <Col md={6}>
            <img 
              src={kaliImage}
              alt='gogo'
              className='hero-img'
            />
          </Col>
          <Col md={6}>
          <img 
              src={codeSnippet}
              alt='dasd'
              className='hero-img'
            />
          </Col>
        </Row>
            <div class="card-img-overlay d-flex align-items-center container">
               <div class="row  mb-5">
                  <div class=" col-sm-12 text-content">
                     <h2 class="card-title ">
                        Canada
                     </h2>
                     <button class="btn btn-primary">
                        Viewl all Location
                     </button>
                  </div>
               </div>
         </div>
    </section>
  );
}

export default App;