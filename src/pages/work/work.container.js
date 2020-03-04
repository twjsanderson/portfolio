import React from 'react';
import './index.css';

// components 
import WorkView from './work.component';

// constants
import projects from '../../constants/work';

const Work = () => {
    const projectsArray = projects.projects;
    return (
        <section id='work'>
            <WorkView 
                projects={projectsArray}
            />
        </section>
    )
};

export default Work;