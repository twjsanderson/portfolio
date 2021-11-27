import React from 'react';
import './index.css';

// components 
import ExperienceView from './experience.component';
import jobs from '../../constants/experience';

// resume
import pdf from '../../assets/Tom_Resume.pdf';

const Experience = () => {
    const jobArray = jobs.jobs;
    
    return (
        <section id='experience'>
            <ExperienceView 
                pdf={pdf} 
                jobs={jobArray}
            />
        </section>
    )
};

export default Experience;