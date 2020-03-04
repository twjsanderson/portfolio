import React from 'react';
import './index.css';

// components 
import ExperienceView from './experience.component';

// resume
import pdf from '../../assets/Tom_Resume.pdf';

const Experience = () => {
    return (
        <section id='experience'>
            <ExperienceView pdf={pdf} />
        </section>
    )
};

export default Experience;