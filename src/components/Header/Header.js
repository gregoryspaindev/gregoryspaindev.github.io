import './Header.css';
import logo from '../../assets/FinalLogo.svg'
function Header() {
  return (
    <header className='header'>
      <div className='header_container'>
        <div className='logo_container'>
          <img src={ logo } alt='logo for gs design and development' />
        </div>
        <div className='nav_container'>
          <a href='#design' className='nav_design'>Design</a>
          <a href='#dev' className='nav_dev'>Development</a>
          <a href='#previous' className='nav_prev'>Previous Experience</a>
        </div>
      </div>
    </header>
  )
}

export default Header;