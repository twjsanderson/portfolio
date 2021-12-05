import React from 'react';
import './app.css';

// pages
import Main from '../pages/main';
import About from '../pages/about';
import Experience from '../pages/experience';
import Writing from '../pages/writing';

// components
import Navigation from '../features/ui/navigation';
import Footer from '../features/ui/footer';
import Contact from '../pages/contact/contact.container';

const App = () => {

  return (
    <>
      <Navigation />
      <Main />
      <About />
      <Experience />
      <Writing />
      <Contact />
      <Footer />
    </>
  );
}

export default React.memo(App);