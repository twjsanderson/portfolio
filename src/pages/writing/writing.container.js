import React from 'react';
import {} from 'react-bootstrap';

// Components 
import WritingView from './writing.component';

// Constants
import { articles } from '../../constants/writing';

const Writing = () => {
    return (
        <section id='writing'>
            <WritingView 
                articles={articles}
            />
        </section>
    )
};

export default Writing;