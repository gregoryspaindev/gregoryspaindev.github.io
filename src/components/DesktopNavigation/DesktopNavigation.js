import './DesktopNavigation.css'


function DesktopNavigation(props) {
  const [showDesign, showDev, showPrevExp] = props.handlers
  return (
  <div className='desktop_nav_container'>
    <ul className='desktop_nav_list'>
      <li><input type='button' className='desktop_nav_design' onClick={showDesign} value={'Design'} style={{color: props.pageIndex === 0 && "#ff3399"}}/></li>
      <li><input type='button' className='desktop_nav_dev' onClick={showDev} value={'Development'} style={{color: props.pageIndex === 1 && "#ff3399"}}/></li>
      <li><input type='button' className='desktop_nav_prev' onClick={showPrevExp} value={'Previous Experience'} style={{color: props.pageIndex === 2 && "#ff3399"}}/></li>
    </ul>
  </div>
  )
}

export default DesktopNavigation;