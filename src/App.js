import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import BasicTabs from './components/ProjectBox/ProjectBox.js';
import HeroImage from './components/HeroImage/HeroImage.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroImage />
      <BasicTabs />
      <BasicTabs />
      <BasicTabs />
      <Footer />
    </div>
  );
}

export default App;
