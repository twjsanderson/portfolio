import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ImageDisplay = ({ images }) => {
    return (
        images.map((image, index) => {
            return (
                <Row className='m-5' key={index}>
                    <Col md={6}>
                    <a href={image.website}>
                        <div className='hover-effect rounded'>
                        <img 
                            src={image.imageLink}
                            className='img-fluid rounded'
                            alt={image.imgAlt}
                        />
                        <div className='overlay'>
                            <h2>{image.title}</h2>
                            <p>{image.text}</p>
                        </div>
                        </div>
                    </a>
                    </Col>
                </Row>
            )
        })
    );
}

export default ImageDisplay;