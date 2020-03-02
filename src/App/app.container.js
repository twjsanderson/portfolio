import React, { useState } from 'react';
import { Nav, Navbar, Container, Row, Col, ProgressBar, Button, Form } from 'react-bootstrap';
import './app.css';
import Axios from 'axios';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'react-router-dom';
// eslint-disable-next-line
import * as Scroll from 'react-scroll';
// eslint-disable-next-line
import { Element, animateScroll as scroll, scroller } from 'react-scroll'
import Anime from 'react-anime';
 
// images
import portfolio from '../assets/images/profile.jpg';

// resume
import pdf from '../assets/Tom_Resume.pdf';

// TODO's:  add social links, break out files into structure, add some tests

const skills = [
  { type: 'language', name: 'HTML', value: '80' },
  { type: 'language', name: 'CSS', value: '75' },
  { type: 'language', name: 'JavaScript', value: '80' },
  { type: 'learning', name: 'Python', value: '40' },
  { type: 'learning', name: 'Solidity', value: '20' },
  { type: 'framework', name: 'React', value: '75' },
  { type: 'framework', name: 'Node.js', value: '60' },
  { type: 'database', name: 'SQL', value: '40' },
  { type: 'database', name: 'MongoDB', value: '70' },
  { type: 'versioning', name: 'Git', value: '75' },
  { type: 'devops', name: 'Firebase', value: '70' },
  { type: 'devops', name: 'Google Cloud Platform', value: '40' }
];

const App = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = event => {
      event.preventDefault();
      const data = { email, message };
    
      Axios.post('https://us-central1-portfolio-8af66.cloudfunctions.net/submit', data).catch(error => {
        if (error) { 
          setError(error);
        }
      });

      if (error) {
          setSuccess(false)
      } else {
          setSuccess(true);
          setEmail('');
          setMessage('');
      }

  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      smooth: true
    })
  };

  return (
    <>
      <section id='navigation'>
        <Navbar className='nav-container'>
          <Navbar.Brand>Tom Sanderson</Navbar.Brand>
          <Nav className='ml-auto'>
            <Nav.Link onClick={() => scrollToElement('aboutElement')}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToElement('skillsElement')}>Skills</Nav.Link>
            <Nav.Link onClick={() => scrollToElement('workElement')}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToElement('experienceElement')}>Resume</Nav.Link>
            <Nav.Link onClick={() => scrollToElement('writingElement')}>Articles</Nav.Link>
            <Nav.Link onClick={() => scrollToElement('contactElement')}>Contact</Nav.Link>
          </Nav>
        </Navbar>
      </section>

      <section id='main'>
      <Container fluid className='main-container'>
        <Row>
          <Col>
            <Typist 
              startDelay={300} 
              cursor={{ show: false }}
              avgTypingDelay={100}
            >
            <Col className='p-3 h-100 d-flex justify-content-center'>
              <h1 className='main-title'>Tom Sanderson.</h1>  
            </Col>
            <Typist.Delay ms={500} />
            <Col className='p-3 h-100 d-flex justify-content-center'>
              <h1 className='main-title' style={{ textIndent: '2.5em' }}>Web Developer.</h1>
            </Col>
            <Typist.Delay ms={500} />
            <Col className='h-100 d-flex justify-content-center'>
              <span className='main-type'>H@ck3r.</span>
              <Typist.Backspace count={6} delay={150} />
              <span className='main-retype'>acker.</span>
            </Col>
            </Typist>
          </Col>
        </Row>
      </Container>

        <Container fluid className='h-100'>
          <Row className='h-100'>
            <Col className='h-100 d-flex justify-content-center'>
              <Anime rotateX={360} delay={7000} duration={5000}>
                <FontAwesomeIcon 
                  onClick={() => scrollToElement('aboutElement')} 
                  icon={faChevronDown} 
                  className='main-icon' 
                />
              </Anime>
            </Col>
          </Row>
        </Container>
        </section>

        <section id='about'>
        <Container className='p-5'>
          <Row className='text-center'>
            <Col>
            <Element name='aboutElement' />
              <h1 className='about-title p-5'>
                Hi, I'm Tom. 
              </h1>
            </Col>
          </Row>
          <Row className='p-3 text-center'>
            <Col md={6} className=''>
              <img
                src={portfolio}
                className='about-img rounded'
                alt='portrait'
              />
            </Col>
            <Col md={6}>
              <h1 className='pb-3 pt-1'>
                Full Stack Web Developer based in Toronto, Canada
              </h1>
                <h2 className='p-2'>
                  Whether I am designing a custom landing page, building an API integration or testing the 
                  security of a website, I always create lasting value for my clients.
                </h2>
                <h2 className='p-2'>
                  Have a problem that needs to be solved?
                </h2>
                  <Button
                      onClick={() => scrollToElement('contact')}
                    className='experience-button m-3'
                  >
                    Let's Chat
                  </Button>
            </Col>
          </Row>
          </Container>
          </section>

          <section id='skills'>
            <Container className='pt-5'>
              <Element name='skillsElement' />
              <h1 className='skills-title text-center pt-4 pb-2'>Technical Skills.</h1>
              <h1 className='pt-5 pb-3'>Languages</h1>
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
              <h1 className='pt-5 pb-3'>Frameworks/Environments</h1>
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
              <h1 className='pt-5 pb-3'>Databases/Versioning</h1>
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
              <h1 className='pt-5 pb-3'>What I'm Learning Right Now</h1>
              {
                skills.map(item => {
                  if (item.type === 'learning') { 
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
        </section>
            
        <section id='work'>
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

        <section id='experience'>
              <Container>
                <Row className='text-center p-5'>
                <Element name='experienceElement' />
                  <Col>
                    <h1 className='p-3 experience-title'>Resume.</h1>
                  </Col>
                </Row>
                <Row className='experience-row p-3 m-5 rounded'>
                  <Col className='experience-col'>
                    <div className='experience-hover p-2 rounded'>
                      <h2>Freelance Web Developer</h2>
                      <h4>Sep. 2019 - Present</h4>
                    </div>
                    <p className='experience-text p-2'>
                      I build stand alone websites and applications for clients from around the world. Using modern technologies like React and Node.js I 
                      build extensible, fully customized platforms for e-commerce and service based businesses. I also consult for start ups
                      looking to build out their digital infrastructure and automate critical operations. 
                    </p>
                  </Col>
                </Row>
                <Row className='experience-row p-3 m-5 rounded'>
                  <Col className='experience-col'>
                    <div className='experience-hover p-2 rounded'>
                      <h2>Junior Developer @ ZenduIt</h2>
                      <h4>Feb. 2019 - Sep. 2019</h4>
                    </div>
                    <p className='experience-text p-4'>
                      Built unit tests for legacy codebases and new projects. Fixed bugs in live applications and assisted with QA. I was given the 
                      opportunity to build an API integration for a client using Node.js and Typescript. The application was a stand 
                      alone server connecting realtime data feeds from emergency vehicles to a proprietary API owned by the client. 
                    </p>
                  </Col>
                </Row>
                <Row className='text-center'>
                  <Col>
                    <Button
                      href={pdf}
                      target='_blank'
                      className='experience-button m-5'
                    >
                      Download My Resume
                    </Button>
                  </Col>
                </Row>
              </Container>
        </section>

        <section id='writing'>
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
            <Row className='m-5'>
              <Col md={6}>
                <a href='https://medium.com/@tom.w.j.sanderson/a-practical-guide-to-technical-tests-for-junior-devs-part-1-7890b5689c0'>
                <div className='hover-effect rounded'>
                  <img 
                    src='https://miro.medium.com/max/6016/0*qmElKbRUIq2D7mFx'
                    className='img-fluid rounded'
                    alt=''
                  />
                  <div className='overlay'>
                    <h2>A Practical Guide to Technical Tests (For Junior Devs): Part I</h2>
                    <p>
                      The first part of a guide that teaches junior developers how to approach 
                      technical tests and solve coding problems. 
                    </p>
                  </div>
                </div>
                </a>
              </Col>
            </Row>
          </Container>
        </section>

        <section id='contact'>
          <Container>
            <Row className='text-center'>
              <Element name='contactElement' />
              <Col>
                <h1 className='contact-title pt-5 pb-4'>Contact.</h1>
                <h2 className='p-3'>Have some technical questions or a project you need help with? <br />Send me a message.</h2>
              </Col>
            </Row>
            <Row>
              <Col className='d-flex align-items-center justify-content-center'>
                <Form 
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <Row className='p-3'>
                    <Col className=''>
                      <label>
                          <h3>Email</h3>
                          <input 
                              required
                              type='email' 
                              name='email' 
                              size='70'
                              value={email} 
                              onChange={e => setEmail(e.target.value)} 
                          />
                      </label>
                    </Col>
                  </Row>
                  <Row className='p-3'>
                    <Col>
                      <label>
                        <h3>Message</h3>
                        <textarea
                            required
                            rows='7' 
                            cols='70'
                            type='text' 
                            name='message' 
                            value={message} 
                            onChange={e => setMessage(e.target.value)} 
                        />
                      </label>
                    </Col>
                  </Row>
                  <Row className='p-3'>
                    <Col md={2}>
                      <Button 
                        className='experience-button'
                        type='submit' 
                        value='submit' 
                      >
                        Send
                      </Button>
                    </Col>
                    <Col md={10}>
                      {
                        error && success === false ? 
                          <Row className='d-flex justify-content-center mt-2'>
                            <FontAwesomeIcon 
                              icon={faTimesCircle} 
                              className='m-2'
                              color='red' 
                            /> 
                            <h5 className='text-green p-1'>
                            Oops looks like there was an error. Please try again.
                            </h5> 
                          </Row>
                            : success === true ?
                              <Row className='d-flex justify-content-center mt-2'>
                                <FontAwesomeIcon 
                                  icon={faCheckCircle} 
                                  className='m-2'
                                  color='green' 
                                /> 
                                <h5 className='text-green p-1'>
                                  Success! Your message was sent.
                                </h5> 
                              </Row>
                              : null
                      }
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>      
        </section>

        <section id='footer'>
          <Navbar className='nav-container'>
            <Nav className='m-auto'>
              <Button className='footer-button' href='https://github.com/twjsanderson'>
                  <FontAwesomeIcon  
                    icon={faGithubSquare} 
                    className='footer-icon' 
                  />
              </Button>
              <Button className='footer-button' href='https://www.linkedin.com/in/tom-sanderson-b6bb5084/'>
                  <FontAwesomeIcon  
                    icon={faLinkedin} 
                    className='footer-icon' 
                  />
              </Button>
              <Button className='footer-button' href='https://medium.com/@tom.w.j.sanderson'>
                <FontAwesomeIcon  
                  icon={faMedium} 
                  className='footer-icon' 
                />
              </Button>
            </Nav>
          </Navbar>
        </section>
        </>
  );
}

export default App;