import React, { useState } from 'react';

// Components 
import AboutView from './about.component';
import scrollToElement from '../../helperFunctions/scroll/scroll';

// Images
import portfolio from '../../assets/images/profile.jpg';

const About = () => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <section id ='about'>
            <AboutView 
                portfolio={portfolio} 
                showDetails={showDetails}
                setShowDetails={setShowDetails}
                scrollToElement={scrollToElement} 
            />
        </section>
    )
};

export default About;