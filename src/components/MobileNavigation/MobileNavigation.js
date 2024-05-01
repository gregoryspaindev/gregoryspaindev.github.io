import './MobileNavigation.css'


function MobileNavigation(props) {

const [showDesign, showDev, showPrevExp] = props.handlers

  return (
      
    <div className='mobile_nav_container'>
    <ul className='mobile_nav_list'>
      <li><input type='button' className='mobile_nav_design' onClick={() => {props.hideModal(); showDesign()}} value={'Design'} style={{color: props.pageIndex === 0 && "#ff3399"}}/></li>
      <li><input type='button' className='mobile_nav_dev' onClick={() => {props.hideModal(); showDev()}} value={'Development'} style={{color: props.pageIndex === 1 && "#ff3399"}}/></li>
      <li><input type='button' className='mobile_nav_prev' onClick={() => {props.hideModal(); showPrevExp()}} value={'Previous Experience'} style={{color: props.pageIndex === 2 && "#ff3399"}}/></li>
    </ul>
  </div>
  )
}

export default MobileNavigation;