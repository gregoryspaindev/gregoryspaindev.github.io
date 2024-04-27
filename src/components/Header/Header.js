import './Header.css';
import HeroImage from '../HeroImage/HeroImage.js';
import logo from '../../assets/FinalLogo.svg'


function Header(props) {

  return (
    <header className='header'>
      <div className='header_container'>
        <div className='logo_container'>
          <img src={ logo } alt='logo for gs design and development' onClick={props.showHome}/>
        </div>
        <div className='nav_container'>
          <ul className='nav_list'>
            <li><input type='button' className='nav_design' onClick={props.showDesign} value={'Design'} /></li>
            <li><input type='button' className='nav_dev' onClick={props.showDev} value={'Development'} /></li>
            <li><input type='button' className='nav_prev' onClick={props.showPrevExp} value={'Previous Experience'} /></li>
          </ul>
        </div>
      </div>
      <HeroImage />
      <h1 className='page_heading'>Design Projects</h1>
    </header>
  )
}

export default Header;