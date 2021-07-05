import React from 'react';
import './index.css';

// components 
import WorkView from './work.component';

// Constants
import { projects } from '../../constants/work';

const Work = () => {
    return (
        <section id='work'>
            <WorkView 
                projects={projects}
            />
        </section>
    )
};

export default Work;