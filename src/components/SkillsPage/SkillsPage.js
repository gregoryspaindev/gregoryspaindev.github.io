import './SkillsPage.css'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function SkillsPage(props) {

  return (
    <div className='skills_page_conatiner'>
      <div className='icon_container'>
        <ArrowBackIosNewIcon
          fontSize='large'
          onClick={props.showHome}/>
      </div>
      <div className='skills_page_left_container'>
        <h2 className='skills_header'>Some of the Programming Languages and Frameworks I have experience with are:</h2>
        <div className='list_container'>
          <ul className='skills_list'>
            <li>HTML &amp; CSS</li>
            <li>Javascript</li>
            <li>React &#40;this page is created with react&#41;</li>
            <li>Express.js &amp; Node.js</li>
            <li>SQL</li>
            <li>C#</li>
          </ul>
        </div>
      </div>
      <h2 className='skills_header'>Check out some of my projects by clicking the buttons below!</h2>
      <div className='button_container'>
        <button className='nav_button' onClick={props.showDesign}>Design</button>
        <button className='nav_button' onClick={props.showDev}>Development</button>
       </div>
    </div>
    
  )
}

export default SkillsPage;