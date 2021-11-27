import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
import { Element } from 'react-scroll'


// components 
import SkillsView from './skills.component';
import skills from '../../constants/skills';

const Skills = () => {
    const skillsArray = skills.skills;
    const skillsTitlesArray = skills.skillsTitles;

    return (
        <section id='skills'>
            <Container className='pt-5'>
                <Element name='skillsElement' />
                <h1 className='skills-title text-center pt-4 pb-2'>Technical Skills.</h1>
                {
                    skillsTitlesArray.map((skillTitle, index) => {
                        return (
                            <div key={skillTitle}>
                                <h1 className='pt-5 pb-3' key={index}>{skillTitle}</h1>
                                <SkillsView
                                    skills={skillsArray}
                                    title={skillTitle}
                                />
                            </div>
                        ); 
                    })
                }
            </Container>
        </section>
    )
};

export default Skills;