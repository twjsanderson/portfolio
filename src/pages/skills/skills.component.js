import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import './index.css';

const SkillsView = (props) => {
    const { type, skill, index } = props;
    
    if (skill.type === type) {
        return (
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
        )
    } 
    return null;
};

export default SkillsView;