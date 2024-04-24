import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header_container'>
        <a href='#design' className='nav_design'>Design</a>
        <a href='#dev' className='nav_dev'>Development</a>
        <a href='#previous' className='nav_prev'>Previous Experience</a>
      </div>
    </header>
  )
}

export default Header;