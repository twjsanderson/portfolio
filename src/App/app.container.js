import React, { useState } from 'react';
import { Nav, Navbar, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './app.css';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// eslint-disable-next-line
import * as Scroll from 'react-scroll';
import { Element, animateScroll as scroll, scroller } from 'react-scroll'
import Anime from 'react-anime';
 

// images
import portfolio from '../assets/images/profile.jpg';

const skills = [
  { type: 'language', name: 'HTML', value: '80' },
  { type: 'language', name: 'CSS', value: '75' },
  { type: 'language', name: 'JavaScript', value: '80' },
  { type: 'language', name: 'Python', value: '40' },
  { type: 'language', name: 'Ruby', value: '30' },
  { type: 'language', name: 'Solidity', value: '20' },
  { type: 'framework', name: 'React', value: '75' },
  { type: 'framework', name: 'Angular', value: '35' },
  { type: 'framework', name: 'Node.js', value: '60' },
  { type: 'framework', name: 'Ruby On Rails', value: '30' },
  { type: 'database', name: 'SQL', value: '35' },
  { type: 'database', name: 'MongoDB', value: '70' },
  { type: 'versioning', name: 'Git', value: '75' },
  { type: 'devops', name: 'Firebase', value: '70' },
  { type: 'devops', name: 'Google Cloud Platform', value: '40' }
];

const App = () => {
  const [show, setShow] = useState('main-no-show');

  const scrollToElement = () => {
    scroller.scrollTo('aboutElement', {
      duration: 1000,
      smooth: true
    })
  };

  return (
    <>
    <section id='main'>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Tom Sanderson</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <Container fluid className='main-container'>
          <Row>
            <Col>
              <Typist 
                startDelay={300} 
                cursor={{ show: false }}
                avgTypingDelay={100}
              >
              <Col className='p-3 h-100 d-flex justify-content-center'>
                <h1 className='main-title'>Tom Sanderson</h1>  
              </Col>
              <Typist.Delay ms={500} />
              <Col className='p-3 h-100 d-flex justify-content-center'>
                <h1 className='main-title' style={{ textIndent: '2.5em' }}>Web Developer</h1>
              </Col>
              <Typist.Delay ms={500} />
              <Col className='h-100 d-flex justify-content-center'>
                <span className='main-type'>H@ck3r</span>
                <Typist.Backspace count={5} delay={150} />
                <span className='main-retype'>acker</span>
              </Col>
              </Typist>
            </Col>
          </Row>
        </Container>
        <Container fluid className='h-100'>
          <Row className='h-100'>
            <Col className='h-100 d-flex justify-content-center'>
              <Anime rotateX={360} delay={9300} duration={5000}>
                <FontAwesomeIcon onClick={() => scrollToElement()} icon={faChevronDown} className='main-icon' />
              </Anime>
            </Col>
          </Row>
        </Container>
        </section>

        <section id='about'>
        <Container className=''>
          <Row className='text-center'>
            <Col>
            <Element name="aboutElement" />
              <h1 className='about-title p-3'>
                Hi, I'm Tom. 
              </h1>
            </Col>
          </Row>
          <Row className='p-4 text-center'>
            <Col md={6} className=''>
              <img
                src={portfolio}
                className='about-img rounded'
                alt='portrait'
              />
            </Col>
            <Col md={6}>
              <h1 className='p-2'>
                Full-Time Web Developer. Part-Time Hacker.
              </h1>
                <h2 className='p-2'>
                  Whether I am designing a custom landing page, building an API integration or testing the 
                  security of a website, I always create lasting value for my clients.
                </h2>
                <h2 className='p-2'>
                  Have a problem that needs to be solved?
                </h2>
                <h2 className='p-2'>
                 <a href='www.google.ca' className='about-cta'><strong>Let's talk.</strong></a>
                </h2>
            </Col>
          </Row>
          </Container>
          </section>

          <Container className='pt-5 text-center'>
            <h1>My Technical Skills</h1>
          </Container>
          <Container className=''>
              <h1 className='pt-5 pb-3'>Languages/Scripts</h1>
              {
                skills.map(item => {
                  if (item.type === 'language') { 
                    return <Row key={item.name} className='h-100 d-flex justify-content-center align-items-center'>
                      <Col md={2} className='pt-2'>
                        <h4>{item.name}</h4>
                      </Col>
                      <Col md={8}>
                        <ProgressBar variant='dark' now={item.value} /> 
                      </Col>
                      <Col md={2} className='pt-2'>
                        <h4>{item.value}%</h4>
                      </Col>
                    </Row>
                  }
                  return null;
                })
              }
              <h1 className='pt-5 pb-3'>Frameworks</h1>
              {
                skills.map(item => {
                  if (item.type === 'framework') {
                    return <Row key={item.name} className='h-100 d-flex justify-content-center align-items-center'>
                      <Col md={2} className='pt-2'>
                        <h4>{item.name}</h4>
                      </Col>
                      <Col md={8}>
                        <ProgressBar variant='dark' now={item.value} /> 
                      </Col>
                      <Col md={2} className='pt-2'>
                        <h4>{item.value}%</h4>
                      </Col>
                    </Row>
                  }
                  return null;
                })
              }
              <h1 className='pt-5 pb-3'>Database/Versioning</h1>
              {
                skills.map(item => {
                  if (item.type === 'database' || item.type === 'versioning') {
                    return <Row key={item.name} className='h-100 d-flex justify-content-center align-items-center'>
                      <Col md={2} className='pt-2'>
                        <h4>{item.name}</h4>
                      </Col>
                      <Col md={8}>
                        <ProgressBar variant='dark' now={item.value} /> 
                      </Col>
                      <Col md={2} className='pt-2'>
                        <h4>{item.value}%</h4>
                      </Col>
                    </Row>
                  }
                  return null;
                })
              }
               <h1 className='pt-5 pb-3'>DevOps</h1>
              {
                skills.map(item => {
                  if (item.type === 'devops') {
                    return <Row key={item.name} className='h-100 d-flex justify-content-center align-items-center'>
                      <Col md={2} className='pt-2'>
                        <h4>{item.name}</h4>
                      </Col>
                      <Col md={8}>
                        <ProgressBar variant='dark' now={item.value} /> 
                      </Col>
                      <Col md={2} className='pt-2'>
                        <h4>{item.value}%</h4>
                      </Col>
                    </Row>
                  }
                  return null;
                })
              }
        </Container>
        <Container className='p-4'>
            <Row className='text-center'>
              <Col>
                <h1 className='p-3'>My Work</h1>
              </Col>
            </Row>
            <Row className='m-3'>
              <Col md={6}>
                <div className='hover-effect'>
                  <img 
                    src='https://github.com/twjsanderson/geoLocation-app/blob/master/src/assets/images/homePage.png?raw=true'
                    className='img-fluid rounded'
                  />
                  <div className='overlay'>
                    <h2>Browser Power</h2>
                    <p>dasddadfafs ddaDSAD dns fhhf ksd;ak fnasdk fndsa nf dasnk ffdsf sfs</p>
                  </div>
                </div>
              </Col>
              </Row>
        </Container>
        </>
  );
}

export default App;