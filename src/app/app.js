import React, { useState, useEffect } from 'react';
import './app.css';

import { getLocalStorage, setLocalStorage } from '../helperFunctions/localStorage/localStorage';

// Components
import HOC from '../features/HOC/index';
import Navigation from '../features/ui/navigation';
import Main from '../pages/main';
import About from '../pages/about';
import Work from '../pages/work';
import Writing from '../pages/writing';
import Contact from '../pages/contact';
import Footer from '../features/ui/footer';

// Components with HOC
const EnhancedNavigation = HOC(Navigation);
const EnhancedAbout = HOC(About);
const EnhancedWork = HOC(Work);
const EnhancedWriting = HOC(Writing);
const EnhancedContact = HOC(Contact);

const App = () => {
  const [showAllComponents, setShowAllComponents] = useState(false);

  useEffect(() => {
    const localStorage = window.localStorage;
  
    if (getLocalStorage(localStorage)) {
        setLocalStorage(localStorage);
        setShowAllComponents(true);
    } else {
      setLocalStorage(localStorage);
      setTimeout(() => {
        setShowAllComponents(true);
      }, 9000);
    }

  }, [showAllComponents])

  return (
    <section id='app'>
      <EnhancedNavigation showAllComponents={showAllComponents} />
      <Main />
      <EnhancedAbout showAllComponents={showAllComponents} />
      <EnhancedWork showAllComponents={showAllComponents} />
      <EnhancedWriting showAllComponents={showAllComponents} />
      <EnhancedContact showAllComponents={showAllComponents} /> 
      <Footer />
    </section>
  );
}

export default React.memo(App);