import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import ProjectContent from './components/ProjectContent/ProjectContent.js';

import { useState } from 'react';
import Homepage from './Homepage/Homepage.js';

const App = () => {

  const [showHome, setShowHome] = useState(true);
  const [showProjectContent, setShowProjectContent] = useState(false);
  const [pageIndex, setPageIndex] = useState(3);

  const showHomeHandler = () => {
    setShowProjectContent(false);
    setShowHome(true);
    setPageIndex(3);
  };
  
  const showDesignHandler = () => {
    setShowHome(false);
    setShowProjectContent(true);
    setPageIndex(0);
  };

  const showDevHandler = () => {
    setShowHome(false);
    setShowProjectContent(true);
    setPageIndex(1);
  };

  const showPrevExpHandler = () => {
    setShowHome(false);
    setShowProjectContent(true);
    setPageIndex(2);
  };

  return (
    <div className="App">
      <Header
        showHome={showHomeHandler}
        showDesign={showDesignHandler}
        showDev={showDevHandler}
        showPrevExp={showPrevExpHandler}
        pageIndex={pageIndex} />
      {showHome && <Homepage />}
      {showProjectContent && <ProjectContent pageIndex={pageIndex} />}
      <Footer />
    </div>
  );
}

export default App;
