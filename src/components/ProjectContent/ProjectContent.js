
import './ProjectContent.css'

import AllProjects from '../../Data/Projects';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useState } from 'react';


function ProjectContent(props) {
 
  const [projectIndex, setProjectIndex] = useState(0);

  const prevProjectHandler = () => {
    console.log(projectIndex);
    let newProjectIndex = projectIndex - 1;
    setProjectIndex(newProjectIndex);
  };
  
  const nextProjectHandler = () => {
    console.log(projectIndex);
    let newProjectIndex = projectIndex + 1;
    setProjectIndex(newProjectIndex);
  };
  
  return (
    <div className='page_container'>
      <div className='icon_container'>
        {projectIndex !== 0 && <ArrowBackIosNewIcon fontSize='large' onClick={prevProjectHandler}/>}
      </div>
      <div className='project_container'>
        <h2 className='project_header'>{AllProjects[props.pageIndex][projectIndex].title}</h2>
        {AllProjects[props.pageIndex][projectIndex].image}
        <p className='project_description'>{AllProjects[props.pageIndex][projectIndex].description}</p>
      </div>
      <div className='icon_container'>
        {
          projectIndex < AllProjects[props.pageIndex].length - 1 &&
          <ArrowForwardIosIcon
            fontSize='large'
            onClick={nextProjectHandler}/>
        }
      </div>
    </div>
  )
}

export default ProjectContent;