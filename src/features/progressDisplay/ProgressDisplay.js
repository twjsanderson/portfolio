import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

const ProgressDisplay = ({ type, skill, index } ) => {
    return (
        skill.type === type ?
            <Row key={index} className='h-100 d-flex justify-content-center align-items-center'>
                <Col md={2} className='pt-2'>
                    <h4>{skill.name}</h4>
                </Col>
                <Col md={8}>
                    <ProgressBar 
                        variant='dark' 
                        now={skill.value} 
                    /> 
                </Col>
                <Col md={2} className='pt-2'>
                    <h4>{skill.value}%</h4>
                </Col>
            </Row>
            : null
    )
};

export default ProgressDisplay;
