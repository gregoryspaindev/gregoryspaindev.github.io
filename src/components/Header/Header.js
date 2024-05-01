import './Header.css';

import useWindowDimensions from '../../Hooks/Hooks.js';
import HeroImage from '../HeroImage/HeroImage.js';
import logo from '../../assets/FinalLogo.svg'
import DesktopNavigation from '../DesktopHeader/DesktopNavigation.js';
import MobileNavigation from '../MobileNavigation/MobileNavigation.js';


function Header(props) {

  const [showHome, showDesign, showDev, showPrevExp] = props.handlers

  const NavigationHandlers = [showDesign, showDev, showPrevExp];

  const { width } = useWindowDimensions();
  const pageHeader = ["Design Projects",
                      "Development Projects",
                      "Previous Experience",
                      "Hi, I'm"
                      ]

  return (
    <header className='header'>
      <div className='header_container'>
        <div className='logo_container'>
          <img src={ logo } alt='logo for gs design and development' onClick={showHome}/>
        </div>
        {width < 1000 ? <MobileNavigation handlers={NavigationHandlers} pageIndex={props.pageIndex}/> :
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