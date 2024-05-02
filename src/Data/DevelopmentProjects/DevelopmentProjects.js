import birdAppAddVisit from '../../assets/birdAppAddVisit.png';
import birdAppChooseVisit from '../../assets/birdAppChooseVisit.png';
import birdAppUserPage from '../../assets/birdAppUserPage.png';
import birdAppViewVisit from '../../assets/birdAppViewVisit.png';

import HarrysCart from '../../assets/HarrysCart.jpg';
import HarrysEmployee from '../../assets/HarrysEmployee.jpg';
import HarrysHomepage from '../../assets/HarrysHomepage.jpg';
import HarrysRegistration from '../../assets/HarrysRegistration.jpg';



const BirdAppProject = {
  title: "Birdhouse Tracker App",
  images: [
    <img className='project_image' src={birdAppAddVisit} alt='logo for ds design and development'/>,
    <img className='project_image' src={birdAppChooseVisit} alt='logo for ds design and development' />,
    <img className='project_image' src={birdAppUserPage} alt='logo for ds design and development' />,
    <img className='project_image' src={birdAppViewVisit} alt='logo for ds design and development' />,
  ],
  descriptions: [
    "We were tasked with creating a logoLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "We were tasked with creating a logoLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "We were tasked with creating a logoLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "We were tasked with creating a logoLorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ]
}

const DevLogoProject2 = {
  title: "Dev Logo Project2",
  images: [
    <img className='project_image' src={HarrysHomepage} alt='logo for ds design and development' />,
    <img className='project_image' src={HarrysRegistration} alt='logo for ds design and development' />,
    <img className='project_image' src={HarrysCart} alt='logo for ds design and development' />,
    <img className='project_image' src={HarrysEmployee} alt='logo for ds design and development' />,
  ],
  descriptions: [
    "testing 123.",
    "testing456",
    "testing 123.",
    "testing456"
  ]
}

// const LogoProject = {
//   "title": "Logo Project",
//   "image": logo,
//   "description":"We were tasked with creating a logo"
// }

const DevelopmentProjects = [BirdAppProject, DevLogoProject2];

export default DevelopmentProjects;