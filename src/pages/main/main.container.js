import React from 'react';

// Components 
import MainView from './main.component';

const Main = () => {
    return (
        <section id='main'>
            <MainView />
        </section>
    )
};

export default React.memo(Main);