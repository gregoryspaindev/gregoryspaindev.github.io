import logo from '../assets/FinalLogo.svg'


const LogoProject = {
  title: "Logo Project",
  image: <img className='project_image' src={logo} alt='logo for ds design and development' />,
  description:"We were tasked with creating a logoLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim et justo sed rutrum. Etiam luctus iaculis varius. In condimentum lacinia sem in feugiat. Fusce sapien metus, lobortis a ligula non, rhoncus venenatis risus. Sed iaculis sem volutpat diam dictum malesuada. Aliquam vitae nisl ac nisi molestie dapibus. Morbi quis cursus ligula, in blandit elit. Nam eleifend magna id felis facilisis, ac laoreet purus varius."
}

const LogoProject2 = {
  title: "Logo Project",
  image: <img className='project_image' src={logo} alt='logo for ds design and development' />,
  description:"testing 123."
}

// const LogoProject = {
//   "title": "Logo Project",
//   "image": logo,
//   "description":"We were tasked with creating a logo"
// }

const DesignProjects = [LogoProject, LogoProject2];
const DevelopmentProjects = [LogoProject, LogoProject2];
const PreviousExperience = [LogoProject, LogoProject2];
const AllProjects = [DesignProjects, DevelopmentProjects, PreviousExperience];

export default AllProjects;