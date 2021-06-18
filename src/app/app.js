import React from 'react';
import './app.css';

// import components
import Navigation from '../features/ui/navigation';
import Main from '../pages/main';
import About from '../pages/about';
import Skills from '../pages/skills';
import Work from '../pages/work';
import Experience from '../pages/experience';
import Writing from '../pages/writing';
import Contact from '../pages/contact';
import Footer from '../features/ui/footer';

const App = () => {
  return (
    <section id='section'>
      <Navigation />
      <Main />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Writing />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;