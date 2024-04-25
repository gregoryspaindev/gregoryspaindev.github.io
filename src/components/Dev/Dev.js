
import './Dev.css'
import logo from '../../assets/FinalLogo.svg'


function DevContent() {

  const LogoProject = {
    title: "Logo Project",
    image: logo,
    description:"We were tasked with creating a logo"
  }
  
  // const LogoProject = {
  //   "title": "Logo Project",
  //   "image": logo,
  //   "description":"We were tasked with creating a logo"
  // }
  
  const DevProjects = [LogoProject]
  
  return (
    <div className='dev_container'>
      <h1 className='dev_header'>Development Projects</h1>
      <div className='project_container'>
        <div className='project_inner_container'>
          <h2 className='project_header'>{DevProjects[0].title}</h2>
          <img className='project_image' src={ DevProjects[0].image } alt='logo for ds dev and development' />
          <p className='description'>{DevProjects[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DevContent;