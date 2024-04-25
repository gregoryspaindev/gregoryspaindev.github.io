
import './PrevExp.css'
import logo from '../../assets/FinalLogo.svg'


function PrevExpContent() {

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
  
  const PrevExpProjects = [LogoProject]
  
  return (
    <div className='prevExp_container'>
      <h1 className='prevExp_header'>Previous Experience</h1>
      <div className='project_container'>
        <div className='project_inner_container'>
          <h2 className='project_header'>{PrevExpProjects[0].title}</h2>
          <img className='project_image' src={ PrevExpProjects[0].image } alt='logo for ds prevExp and development' />
          <p className='description'>{PrevExpProjects[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default PrevExpContent;