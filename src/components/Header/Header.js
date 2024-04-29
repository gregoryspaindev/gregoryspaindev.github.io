import './Header.css';

// import useWindowDimensions from '../../Hooks/Hooks.js';
import HeroImage from '../HeroImage/HeroImage.js';
import logo from '../../assets/FinalLogo.svg'
// import MenuIcon from '@mui/icons-material/Menu';


function Header(props) {

  // const { width } = useWindowDimensions();
  const pageHeader = ["Design Projects",
                      "Development Projects",
                      "Previous Experience",
                      "Hi, I'm"
                      ]

  return (
    <header className='header'>
      <div className='header_container'>
        <div className='logo_container'>
          <img src={ logo } alt='logo for gs design and development' onClick={props.showHome}/>
        {/* {width < 1000 && <MenuIcon />} */}
        </div>
        <div className='nav_container'>
          <ul className='nav_list'>
            <li><input type='button' className='nav_design' onClick={props.showDesign} value={'Design'} style={{color: props.pageIndex === 0 && "#ff3399"}}/></li>
            <li><input type='button' className='nav_dev' onClick={props.showDev} value={'Development'} style={{color: props.pageIndex === 1 && "#ff3399"}}/></li>
            <li><input type='button' className='nav_prev' onClick={props.showPrevExp} value={'Previous Experience'} style={{color: props.pageIndex === 2 && "#ff3399"}}/></li>
          </ul>
        </div>
      </div>
      <HeroImage />
      <h1 className='page_heading'>{pageHeader[props.pageIndex]}{props.pageIndex === 3 && <span className='gregory'> Gregory</span>}</h1>
    </header>
  )
}

export default Header;