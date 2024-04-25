
import './Design.css'
import logo from '../../assets/FinalLogo.svg'


function DesignContent() {

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
  
  const DesignProjects = [LogoProject]
  
  return (
    <div className='design_container'>
      <h1 className='design_header'>Design Projects</h1>
      <div className='project_container'>
        <div className='project_inner_container'>
          <h2 className='project_header'>{DesignProjects[0].title}</h2>
          <img className='project_image' src={ DesignProjects[0].image } alt='logo for ds design and development' />
          <p className='description'>{DesignProjects[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DesignContent;