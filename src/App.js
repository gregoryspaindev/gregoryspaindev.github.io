import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import BasicTabs from './components/ProjectBox/ProjectBox.js';
import DesignContent from './components/Design/Design.js';

import { useState } from 'react';
import DevContent from './components/Dev/Dev.js';
import PrevExpContent from './components/PrevExp/PrevExp.js';

const App = () => {

  const [showHome, setShowHome] = useState(true);
  const [showDesign, setShowDesign] = useState(false);
  const [showDev, setShowDev] = useState(false);
  const [showPrevExp, setShowPrevExp] = useState(false);
  const [pageIndex, setPageIndex] = useState(4);

  const pageHeader = ["Design Projects",
                      "Development Projects",
                      "Previous Experience",
                      "Welcome!"
                      ]

  const showHomeHandler = () => {
    setShowDesign(false);
    setShowDev(false);
    setShowPrevExp(false);
    setShowHome(true);
    setPageIndex(4);
  };
  
  const showDesignHandler = () => {
    setShowHome(false);
    setShowDev(false);
    setShowPrevExp(false);
    setShowDesign(true);
    setPageIndex(0);
  };

  const showDevHandler = () => {
    setShowHome(false);
    setShowDesign(false);
    setShowPrevExp(false);
    setShowDev(true);
    setPageIndex(1);
  };

  const showPrevExpHandler = () => {
    setShowHome(false);
    setShowDev(false);
    setShowDesign(false);
    setShowPrevExp(true);
    setPageIndex(4);
  };

  return (
    <div className="App">
      <Header
        showHome={showHomeHandler}
        showDesign={showDesignHandler}
        showDev={showDevHandler}
        showPrevExp={showPrevExpHandler}
        pageHeader={pageHeader[pageIndex]} />
      {showHome && <BasicTabs />}
      {showDesign && <DesignContent pageIndex={pageIndex} />}
      {showDev && <DevContent />}
      {showPrevExp && <PrevExpContent />}
      <Footer />
    </div>
  );
}

export default App;
