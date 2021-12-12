import React from 'react';
import './app.css';

// pages
import Main from '../pages/main';
import About from '../pages/about';
import Experience from '../pages/experience';
import Articles from '../pages/articles';
import Contact from '../pages/contact/contact.container';

// features
import Navigation from '../features/ui/navigation';


const App = () => {

  return (
    <>
      <Navigation />
      <Main />
      <About />
      <Experience />
      <Articles />
      <Contact />
    </>
  );
}

export default React.memo(App);