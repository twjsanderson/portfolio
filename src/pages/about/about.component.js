import React from 'react';
import { Element } from 'react-scroll';

// Components
import BackgroundVideo from '../../features/ui/backgroundVideo';

// Assets
import code from '../../assets/video/code.mp4';
import pdf from '../../assets/Tom_Sanderson_Resume.pdf';

// Styles
import './index.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStream } from '@fortawesome/free-solid-svg-icons'

const AboutView = ({ portfolio, showDetails, setShowDetails, scrollToElement }) => {

    return (
        <section id='about-view'>
            <Element name='aboutElement'></Element>
            <BackgroundVideo videoSource={code}>
                <Container fluid className='about-content p-5'>
                    <Row className=''>
                        <FontAwesomeIcon 
                            className='about-content-icon' 
                            aria-hidden='true'
                            icon={faStream} 
                            size={showDetails ? '5x' : '7x'} 
                            onClick={() => setShowDetails(!showDetails)}
                        />
                        {
                            showDetails ? 
                                <>
                                    <Col md={3} className=''>
                                        <img
                                            src={portfolio}
                                            className='about-img'
                                            alt='portrait'
                                        />
                                    </Col>
                                    <Col md={7} className='about-content-block'>
                                        <h4 className=''>{'{'}</h4>
                                        <h4 className='about-content-indent-1'>Name: "Tom Sanderson",</h4>
                                        <h4 className='about-content-indent-1'>Location: "Canada",</h4>
                                        <h4 className='about-content-indent-1'>Occupation(s): [ "Web Developer", "QA Engineer", "Tech Writer", "Mentor" ],</h4>
                                        <h4 className='about-content-indent-1'>Industry Experience: "{new Date().getFullYear() - 2018.5} yrs",</h4>
                                        <h4 className='about-content-indent-1'>Recent Jobs: {'{'}</h4>
                                        <h4 className='about-content-indent-2'>Lighthouse Labs: "Mentor",</h4>
                                        <h4 className='about-content-indent-2'>GlowninMe: "Full Stack Developer",</h4>
                                        <h4 className='about-content-indent-2'>Hifyre: "QA Engineer"</h4>
                                        <h4 className='about-content-indent-1'>{'},'}</h4>
                                        <h4 className='about-content-indent-1'>Education: {'{'}</h4>
                                        <h4 className='about-content-indent-2'>Lighthouse Labs: "Web Development Bootcamp"</h4>
                                        <h4 className='about-content-indent-2'>University of Guelph: "B.A.", </h4>
                                        <h4 className='about-content-indent-1'>{'}'}</h4>
                                        <h4 className='about-content-indent-1'>Technical Skills: [ "HTML/CSS", "JavaScript", "React", "Express", "PostgreSQL" ]</h4>
                                        <h4 className=''>{'}'}</h4>
                                        <Row>
                                            <Button
                                                className='about-content-button m-3'
                                                target='_blank'
                                                href={pdf}
                                            >
                                                <b>ViewCompleteResume( )</b>
                                            </Button>
                                        </Row>
                                        <Row>
                                            <Button
                                                onClick={() => scrollToElement('contactElement')}
                                                className='about-content-button m-3'
                                            >
                                                <b>GoToContactForm( )</b>
                                            </Button>
                                        </Row>
                                    </Col>
                                </> :
                                    null
                        }
                    </Row>
                </Container>
            </BackgroundVideo>
        </section>
    )
};

export default AboutView;