import React from 'react';
import './app.css';

// import components
import Navigation from '../ui/navigation';
import Main from '../pages/main';
import About from '../pages/about';
import Skills from '../pages/skills';
import Work from '../pages/work';
import Experience from '../pages/experience';
import Writing from '../pages/writing';
import Contact from '../pages/contact';
import Footer from '../ui/footer';

// TODo: add tests, write readme, add icons to make it progressive web app, manual QA, check on different browser, deploy to firebase

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