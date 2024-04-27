
import './Design.css'
import logo from '../../assets/FinalLogo.svg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function DesignContent() {

  const LogoProject = {
    title: "Logo Project",
    image: logo,
    description:"We were tasked with creating a logoLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim et justo sed rutrum. Etiam luctus iaculis varius. In condimentum lacinia sem in feugiat. Fusce sapien metus, lobortis a ligula non, rhoncus venenatis risus. Sed iaculis sem volutpat diam dictum malesuada. Aliquam vitae nisl ac nisi molestie dapibus. Morbi quis cursus ligula, in blandit elit. Nam eleifend magna id felis facilisis, ac laoreet purus varius."
  }
  
  // const LogoProject = {
  //   "title": "Logo Project",
  //   "image": logo,
  //   "description":"We were tasked with creating a logo"
  // }
  
  const DesignProjects = [LogoProject]
  
  return (
    <div className='page_container'>
      <div className='icon_container'>
        <ArrowBackIosNewIcon fontSize='large'/>
      </div>
      <div className='project_container'>
        <h2 className='project_header'>{DesignProjects[0].title}</h2>
        <img className='project_image' src={ DesignProjects[0].image } alt='logo for ds design and development' />
        <p className='project_description'>{DesignProjects[0].description}</p>
      </div>
      <div className='icon_container'>
        <ArrowForwardIosIcon fontSize='large'/>
      </div>
    </div>
  )
}

export default DesignContent;