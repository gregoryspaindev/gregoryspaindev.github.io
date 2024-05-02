import './Homepage.css';

import SkillsPage from '../components/SkillsPage/SkillsPage';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

function Homepage(props) {
  
  const [showSkillsPage, setShowskillsPage] = useState(false);

  const showSkillsPageHandler = () => {
    setShowskillsPage(true);
  }

  const hideSkillsPageHandler = () => {
    showSkillsPage &&  setShowskillsPage(false);
  }

  return (
    <div className='homepage_container'>
      {showSkillsPage ? <SkillsPage showDesign={props.showDesign} showDev={props.showDev} showHome={hideSkillsPageHandler} /> :
        <div className='homepage_container'>
          <div className='homepage_greeting_container'>
            <h2 className='homepage_greeting'>Welcome to my portfolio site.</h2>
          </div>
          <br/>
          <p className='homepage_content'>I am a full-stack Web Devoloper with a Bachelor's Degree from
            <a href='https://www.clarkstate.edu/' target='blank'> Clark State College</a> in Springfield, OH.
            This website was created with React as the final project for my Senior
            Capstone Class.
          </p>
          <br/>
          <p className='homepage_content'>This degree program provided a unique opportunity to study elements of
            design and UI/UX along with learning the fundamentals of Front &amp; Back End Web Development.
            I chose a handful of projects from both the "Design" and "Development" realms to showcase the
            different skills learned in each.</p>
          <br/>
          <p className='homepage_content'>Before embarking on my journey as a developer, I had a career in the Telecom
          industry as an Outside Plant Engineer. You can learn more about the skills and values I learned in that
          career on the Previous Experience page.</p>
          <div className='icon_container'>
            <ArrowForwardIosIcon
              fontSize='large'
              onClick={showSkillsPageHandler}/>
          </div>
        </div>
      } 
    </div>
  )
}

export default Homepage;