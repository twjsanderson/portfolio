import React, { useState, useEffect, useCallback } from 'react';
import Slide from 'react-reveal/Slide';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

// constants
import { articles } from '../../constants';

// styles
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './index.css';

const Articles = () => {
    const [showPanel, setShowPanel] = useState(null);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleWindowResize = useCallback(() => {
        setWindowSize(window.innerWidth);
    }, []); 

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleWindowResize]);


    return (
        <section className='articles'>
            <Container>
                <Element name='articlesElement' />
                <Row>
                    <Col className='d-flex justify-content-center text-center mb-4'>
                        <Slide right cascade>
                            <h3>Articles</h3>
                        </Slide>
                    </Col>
                </Row>
                <Slide right cascade>
                    <Row className='text-center mb-4'>
                        {
                            articles
                                .filter(article => {
                                    return (showPanel === null || article.id === showPanel)
                                })
                                .map(article => {
                                    return (
                                        <Col 
                                            md={showPanel === null ? 4 : null} 
                                            className='d-flex justify-content-center' 
                                            key={article.id} 
                                        >
                                            <Image
                                                className={showPanel === null ? 'articles-img-grid' : 'articles-img-single'}
                                                src={article.image} 
                                                alt={article.imgAlt} 
                                                onClick={() => {
                                                    return showPanel === null ? 
                                                        setShowPanel(article.id) : 
                                                            setShowPanel(null)
                                                }}
                                            />
                                            <h4 
                                                className={showPanel === null ? 'articles-title-grid' : 'articles-title-single'}
                                                onClick={() => {
                                                    return showPanel === null ? 
                                                        setShowPanel(article.id) : 
                                                            setShowPanel(null)
                                                }}
                                            >
                                                {article.title}
                                            </h4>
                                            {
                                                showPanel !== null ?
                                                    <FontAwesomeIcon  
                                                        icon={faTimes} 
                                                        className='articles-exit-icon'
                                                        onClick={() => {
                                                            return showPanel === null ? 
                                                                setShowPanel(article.id) : 
                                                                    setShowPanel(null)
                                                        }}
                                                    /> :
                                                        null
                                            }
                                            {
                                                showPanel !== null ?
                                                    <>
                                                        {
                                                            windowSize > 1021 ?
                                                            <p 
                                                                className='articles-text'
                                                                onClick={() => {
                                                                    return showPanel === null ? 
                                                                        setShowPanel(article.id) : 
                                                                            setShowPanel(null)
                                                                }}
                                                            >{article.text}</p> :
                                                                null
                                                        }
                                                        <Button 
                                                            className='articles-button'
                                                            variant='danger'
                                                            onClick={() => window.open(article.website, '_blank')}
                                                        >
                                                            Read Article
                                                        </Button> 
                                                    </> :
                                                        null
                                            }
                                        </Col>
                                    )
                                })
                        }
                        
                    </Row>
                </Slide>
            </Container>
        </section>
    )
};

export default Articles;