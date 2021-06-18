import React from 'react';

// components 
import MainView from './main.component';
import scrollToElement from '../../helperFunctions/scroll';

const Main = () => {
    return (
        <section id='main'>
            <MainView scrollToElement={scrollToElement} />
        </section>
    )
};

export default Main;