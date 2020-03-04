import React from 'react';
import './index.css';

// components
import ProgressDisplay from '../../features/progressDisplay/ProgressDisplay';

const SkillsView = (props) => {
    const { skills, title } = props;
    
    return (
        <section id='skills-view'>
            {
                skills.map((skill, index) => {
                    return (
                        
                            <ProgressDisplay
                                key={skill.name}
                                type={title}
                                skill={skill}
                                index={index} 
                            />  
                        
                    )
                })
            }
        </section>
    )
};

export default SkillsView;