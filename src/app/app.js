import React from 'react';
import './app.css';

// pages
import Main from '../pages/main';
import About from '../pages/about';
import Experience from '../pages/experience';

// components
import Navigation from '../features/ui/navigation';
import Footer from '../features/ui/footer';

const App = () => {

  return (
    <>
      <Navigation />
      <Main />
      <About />
      <Experience />
      <Footer />
    </>
  );
}

export default React.memo(App);