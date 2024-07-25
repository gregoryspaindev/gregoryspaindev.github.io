
import './ProjectContent.css'

import AllProjects from '../../Data/Projects';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

function ProjectContent(props) {
  
  const [showImage, setShowImage] = useState(false);

  const showImageHandler = () => {
    setShowImage(true);
  }

  const hideImageHandler = () => {
    if (showImage) setShowImage(false);
  }

  return (
    <div className='page_container' onClick={hideImageHandler}>
      <div className='outside_icon_container'>
        {props.projectIndex !== 0 &&
        <ArrowBackIosNewIcon
          fontSize='large'
          className='icon'
          onClick={props.showPrevProject}/>
        }
      </div>
      {showImage ? <div className='large_image_container'>{AllProjects[props.pageIndex][props.projectIndex].images[props.subProjectIndex]}</div> :
      <div className='project_container'>
        <h2 className='project_header'>{AllProjects[props.pageIndex][props.projectIndex].title}</h2>
        <div className='project_image_container' onClick={showImageHandler}>{AllProjects[props.pageIndex][props.projectIndex].images[props.subProjectIndex]}</div>
        <div className='project_icon_container'>
          <div className='inner_icon_container'>
            {props.subProjectIndex !== 0 &&
            <ArrowBackIosNewIcon
              fontSize='medium'
              className='icon'
              onClick={props.showPrevSubProject}/>
            }
          </div>
          <div className='inner_icon_container'>
            {
              props.subProjectIndex < AllProjects[props.pageIndex][props.projectIndex].images.length - 1 &&
              <ArrowForwardIosIcon
                fontSize='medium'
                onClick={props.showNextSubProject}/>
            }
          </div>
        </div>
        <p className='project_description'>{AllProjects[props.pageIndex][props.projectIndex].descriptions[props.subProjectIndex]}</p>
      </div>}
      <div className='outside_icon_container'>
        {
          props.projectIndex < AllProjects[props.pageIndex].length - 1 &&
          <ArrowForwardIosIcon
            fontSize='large'
            onClick={props.showNextProject}/>
        }
      </div>
    </div>
  )
}

export default ProjectContent;