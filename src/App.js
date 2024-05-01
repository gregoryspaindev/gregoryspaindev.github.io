import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import ProjectContent from './components/ProjectContent/ProjectContent.js';

import { useState } from 'react';
import Homepage from './Homepage/Homepage.js';

const App = () => {

  // const [showHome, setShowHome] = useState(true);
  // const [showProjectContent, setShowProjectContent] = useState(false);
  const [pageIndex, setPageIndex] = useState(3);
  const [projectIndex, setProjectIndex] = useState(0);
  const [subProjectIndex, setSubProjectIndex] = useState(0);

  const prevProjectHandler = () => {
    setSubProjectIndex(0);
    let newProjectIndex = projectIndex - 1;
    setProjectIndex(newProjectIndex);
  };
  
  const nextProjectHandler = () => {
    setSubProjectIndex(0);
    let newProjectIndex = projectIndex + 1;
    setProjectIndex(newProjectIndex);
  };
  
  const prevSubProjectHandler = () => {
    let newSubProjectIndex = subProjectIndex - 1;
    setSubProjectIndex(newSubProjectIndex);
  };
  
  const nextSubProjectHandler = () => {
    let newSubProjectIndex = subProjectIndex + 1;
    setSubProjectIndex(newSubProjectIndex);
  };
  
  
  const showHomeHandler = () => {
    // setShowProjectContent(false);
    // setShowHome(true);
    setProjectIndex(0);
    setSubProjectIndex(0);
    setPageIndex(3);
  };
  
  const showDesignHandler = () => {
    // setShowHome(false);
    // setShowProjectContent(true);
    setProjectIndex(0);
    setSubProjectIndex(0);
    setPageIndex(0);
  };

  const showDevHandler = () => {
    // setShowHome(false);
    // setShowProjectContent(true);
    setProjectIndex(0);
    setSubProjectIndex(0);
    setPageIndex(1);
  };

  const showPrevExpHandler = () => {
    // setShowHome(false);
    setProjectIndex(0);
    setSubProjectIndex(0);
    setPageIndex(2);
  };

  const NavigationHandlers = [showHomeHandler, showDesignHandler, showDevHandler, showPrevExpHandler];

  return (
    <div className="App">
      <Header
        showHome={showHomeHandler}
        showDesign={showDesignHandler}
        showDev={showDevHandler}
        showPrevExp={showPrevExpHandler}
        handlers={NavigationHandlers}
        pageIndex={pageIndex} />
      {pageIndex === 3 &&
        <Homepage
          showDesign={showDesignHandler}
          showDev={showDevHandler} />
      }
      {pageIndex < 3 &&
        <ProjectContent
          pageIndex={pageIndex}
          projectIndex={projectIndex}
          subProjectIndex={subProjectIndex}
          showNextProject={nextProjectHandler}
          showPrevProject={prevProjectHandler}
          showNextSubProject={nextSubProjectHandler}
          showPrevSubProject={prevSubProjectHandler}
          />
      }
      <Footer />
    </div>
  );
}

export default App;
