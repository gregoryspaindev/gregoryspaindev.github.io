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

  const showHomeHandler = () => {
    setShowDesign(false);
    setShowDev(false);
    setShowPrevExp(false);
    setShowHome(true);
  };
  
  const showDesignHandler = () => {
    setShowHome(false);
    setShowDev(false);
    setShowPrevExp(false);
    setShowDesign(true);
  };

  // const hideDesignHandler = () => {
  //   setShowDesign(false);
  // };
  
  

  const showDevHandler = () => {
    setShowHome(false);
    setShowDesign(false);
    setShowPrevExp(false);
    setShowDev(true);
  };

  // const hideDevHandler = () => {
  //   setShowDev(false);
  // };


  const showPrevExpHandler = () => {
    setShowDev(false);
    setShowDesign(false);
    setShowPrevExp(true);
  };

  // const hidePrevExpHandler = () => {
  //   setShowPrevExp(false);
  // };
  
  return (
    <div className="App">
      <Header
        showHome={showHomeHandler}
        showDesign={showDesignHandler}
        showDev={showDevHandler}
        showPrevExp={showPrevExpHandler} />
      {showHome && <BasicTabs />}
      {showDesign && <DesignContent />}
      {showDev && <DevContent />}
      {showPrevExp && <PrevExpContent />}
      <Footer />
    </div>
  );
}

export default App;
