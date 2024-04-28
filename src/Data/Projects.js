import logo from '../assets/FinalLogo.svg'


const LogoProject = {
  title: "Logo Project",
  images: [
    <img className='project_image' src={logo} alt='logo for ds design and development' />,
    <img className='project_image' src={logo} alt='logo for ds design and development' />
  ],
  descriptions: [
    "We were tasked with creating a logoLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim et justo sed rutrum. Etiam luctus iaculis varius. In condimentum lacinia sem in feugiat. Fusce sapien metus, lobortis a ligula non, rhoncus venenatis risus. Sed iaculis sem volutpat diam dictum malesuada. Aliquam vitae nisl ac nisi molestie dapibus. Morbi quis cursus ligula, in blandit elit. Nam eleifend magna id felis facilisis, ac laoreet purus varius.",
    "We were tasked with creating a logoLorem ipsum dolor sit amet, consectetur adipiscing elit."
  ]
}

const LogoProject2 = {
  title: "Logo Project",
  images: [
    <img className='project_image' src={logo} alt='logo for ds design and development' />,
    <img className='project_image' src={logo} alt='logo for ds design and development' />
  ],
  descriptions: [
    "testing 123.",
    "testing456"
  ]
}

const DevLogoProject = {
  title: "Dev Logo Project",
  images: [
    <img className='project_image' src={logo} alt='logo for ds design and development' />,
    <img className='project_image' src={logo} alt='logo for ds design and development' />
  ],
  descriptions: [
    "We were tasked with creating a logoLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim et justo sed rutrum. Etiam luctus iaculis varius. In condimentum lacinia sem in feugiat. Fusce sapien metus, lobortis a ligula non, rhoncus venenatis risus. Sed iaculis sem volutpat diam dictum malesuada. Aliquam vitae nisl ac nisi molestie dapibus. Morbi quis cursus ligula, in blandit elit. Nam eleifend magna id felis facilisis, ac laoreet purus varius.",
    "We were tasked with creating a logoLorem ipsum dolor sit amet, consectetur adipiscing elit."
  ]
}

const DevLogoProject2 = {
  title: "Dev Logo Project2",
  images: [
    <img className='project_image' src={logo} alt='logo for ds design and development' />,
    <img className='project_image' src={logo} alt='logo for ds design and development' />
  ],
  descriptions: [
    "testing 123.",
    "testing456"
  ]
}

// const LogoProject = {
//   "title": "Logo Project",
//   "image": logo,
//   "description":"We were tasked with creating a logo"
// }

const DesignProjects = [LogoProject, LogoProject2];
const DevelopmentProjects = [DevLogoProject, DevLogoProject2];
const PreviousExperience = [LogoProject, LogoProject2];
const AllProjects = [DesignProjects, DevelopmentProjects, PreviousExperience];

export default AllProjects;