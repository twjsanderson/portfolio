import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
import { Element } from 'react-scroll'


// components 
import SkillsView from './skills.component';
import skills from '../../constants/skills';

const Skills = () => {
    const skillsArray = skills.skills;

    return (
        <section id='skills'>
            <Container className='pt-5'>
                <Element name='skillsElement' />
                <h1 className='skills-title text-center pt-4 pb-2'>Technical Skills.</h1>
                <section id='skills-view'>
                    <h1 className='pt-5 pb-3'>Languages</h1>
                    {
                        skillsArray.map((skill, index) => {
                            return (
                                    <SkillsView
                                        key={skill.name}
                                        type='language'
                                        skill={skill}
                                        index={index} 
                                    />
                            )
                        })
                    }
                                    
                    <h1 className='pt-5 pb-3'>Frameworks/Environments</h1>
                    {
                        skillsArray.map((skill, index) => {
                            return (
                                    <SkillsView
                                        key={skill.name}
                                        type='framework'
                                        skill={skill}
                                        index={index} 
                                    />
                            )
                        })
                    }
                    <h1 className='pt-5 pb-3'>Databases/Versioning</h1>
                    {
                        skillsArray.map((skill, index) => {
                            return (
                                    <SkillsView
                                        key={skill.name}
                                        type='database'
                                        skill={skill}
                                        index={index} 
                                    />
                            )
                        })
                    }
                    <h1 className='pt-5 pb-3'>DevOps</h1>
                    {
                        skillsArray.map((skill, index) => {
                            return (
                                    <SkillsView
                                        key={skill.name}
                                        type='devops'
                                        skill={skill}
                                        index={index} 
                                    />
                            )
                        })
                    }
                    <h1 className='pt-5 pb-3'>What I'm Learning Right Now</h1>
                    {
                        skillsArray.map((skill, index) => {
                            return (
                                    <SkillsView
                                        key={skill.name}
                                        type='learning'
                                        skill={skill}
                                        index={index} 
                                    />
                            )
                        })
                    }
                               
                </section>
            </Container>
        </section>
    )
};

export default Skills;