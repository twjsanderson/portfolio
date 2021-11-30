import React from 'react';

// Styles
import './index.css';
import { Col } from 'react-bootstrap';

const ImageDisplay = ({ images }) => {
    return (
        images.map((image, index) => {
            return (
                <Col md={4} className='m-4' key={index}>
                    <a href={image.website} className=''>
                        <div className='rounded'>
                        <img 
                            className='img-fluid rounded'
                            src={image.imageLink}
                            alt={image.imgAlt}
                        />
                        <div className=''>
                            <h2>{image.title}</h2>
                            <p>{image.text}</p>
                        </div>
                        </div>
                    </a>
                </Col>
            )
        })
    );
}

export default ImageDisplay;