import React from 'react';
import './index.css';

// components
import NavigationView from './navigation.component';

// Helper functions
import { scrollToElement } from '../../../helperFunctions/scroll';

const Navigation = () => {
    return (
        <section id='navigation'>
            <NavigationView  scrollToElement={scrollToElement} />
      </section>
    )
}

export default Navigation;