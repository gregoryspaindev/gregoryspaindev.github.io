import { Fragment } from 'react';
import './MobileNavigation.css'

import MenuIcon from '@mui/icons-material/Menu';

function MobileNavigation(props) {

const [showDesign, showDev, showPrevExp] = props.handlers

  return (
    <Fragment>
    <MenuIcon />
    <div className='mobile_nav_container'>
    <ul className='mobile_nav_list'>
      <li><input type='button' className='mobile_nav_design' onClick={showDesign} value={'Design'} style={{color: props.pageIndex === 0 && "#ff3399"}}/></li>
      <li><input type='button' className='mobile_nav_dev' onClick={showDev} value={'Development'} style={{color: props.pageIndex === 1 && "#ff3399"}}/></li>
      <li><input type='button' className='mobile_nav_prev' onClick={showPrevExp} value={'Previous Experience'} style={{color: props.pageIndex === 2 && "#ff3399"}}/></li>
    </ul>
  </div>
  </Fragment>
  )
}

export default MobileNavigation;