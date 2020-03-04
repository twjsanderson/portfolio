import React from 'react';
import {} from 'react-bootstrap';

// components 
import WritingView from './writing.component';

// constants
import articles from '../../constants/writing';

const Writing = () => {
    const articleArray = articles.articles;
    return (
        <section id='writing'>
            <WritingView 
                articles={articleArray} 
            />
        </section>
    )
};

export default Writing;