import './Header.css';

import useWindowDimensions from '../../Hooks/Hooks.js';
import HeroImage from '../HeroImage/HeroImage.js';
import logo from '../../assets/FinalLogo.svg'
import DesktopNavigation from '../DesktopHeader/DesktopNavigation.js';
import MobileNavigation from '../MobileNavigation/MobileNavigation.js';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';


function Header(props) {

  const [showModal, setShowModal] = useState(false);
  const [showHome, showDesign, showDev, showPrevExp] = props.handlers;

  const NavigationHandlers = [showDesign, showDev, showPrevExp];

  const { width } = useWindowDimensions();

  const pageHeader =
    [
      "Design Projects",
      "Development Projects",
      "Previous Experience",
      "Hi, I'm"
    ];

  const showModalHandler = () => {
    setShowModal(true);
  }
  
  const hideModalHandler = () => {
    setShowModal(false);
  }

  return (
    <header className='header'>
      <div className='header_container'>
      {!showModal && width < 1000 ? <div></div> : <MobileNavigation hideModal={hideModalHandler} handlers={NavigationHandlers} pageIndex={props.pageIndex}/>}
        {!showModal && <div className='logo_container'>
          <img src={ logo } alt='logo for gs design and development' onClick={showHome}/>
        </div>}
        {width < 1000 ?
          <div className='menu_icon'>
            {showModal ? <CloseIcon fontSize='large' onClick={hideModalHandler} /> : <MenuIcon fontSize='large' onClick={showModalHandler} />}
          </div> :
          <DesktopNavigation 
            handlers={NavigationHandlers}
            pageIndex={props.pageIndex}
          />
        }
      </div>
      <HeroImage />
      <h1 className='page_heading'>{pageHeader[props.pageIndex]}{props.pageIndex === 3 && <span className='gregory'> Gregory</span>}</h1>
    </header>
  )
}

export default Header;