import React from 'react';
import './index.css';

// components
import NavigationView from './navigation.component';

// help functions
import scrollToElement from '../../../helperFunctions/scroll/scroll';

const Navigation = () => {
    return (
        <section id='navigation'>
            <NavigationView  scrollToElement={scrollToElement} />
      </section>
    )
}

export default Navigation;