import React from 'react';

// components 
import AboutView from './about.component';
import scrollToElement from '../../helperFunctions/scroll';

// images
import portfolio from '../../assets/images/profile.jpg';

const About = () => {
    return (
        <section id ='about'>
            <AboutView 
                portfolio={portfolio} 
                scrollToElement={scrollToElement} 
            />
        </section>
    )
};

export default About;