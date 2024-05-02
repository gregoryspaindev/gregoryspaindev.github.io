import logo from '../../assets/FinalLogo.svg';
import logoSketch from '../../assets/LogoSketch.jpg';
import logoGif from '../../assets/LogoGif.gif'
import UIAssets from '../../assets/UI_Assets.jpg';
import songName1 from '../../assets/SongName1.jpg';
import songName2 from '../../assets/SongName2.jpg';
import songName3 from '../../assets/SongName3.jpg';
import songName4 from '../../assets/SongName4.jpg';


const LogoProject = {
  title: "Logo Project",
  images: [
    <img className='project_image' src={logo} alt='logo for gs design and development' />,
    <img className='project_image' src={logoSketch} alt='logo for gs design and development' />,
    <img className='logo_gif' src={logoGif} alt='logo for gs design and development' />,
    <img className='project_image' src={UIAssets} alt='ui asset sheet for gs design and development' />
  ],
  descriptions: [
    "As part of my Adobe for Web Professionals class, we were tasked with creating a logo for a theoretical company we might start when we graduated.",
    "This logo started as a charcoal sketch. I used strong shapes and hand drawn lettering to create an architectural feel. Bonus points to anyone who can guess the two items I used as stencils for the shapes!",
    "We also had to create a few variations of the logo, including an animated version. I had never created an animation like this before, but after a little algebra and some trial-and-error I was able to figure it out.",
    "The final part of the project was to create a set of UI Assets and an Asset Sheet for the company. I've always been a bit of an earth tone guy, but I decided embrace change and go in a bold new direction. The yellow in the logo was inspired by a legal pad, but in the end allowed the logo to work in a more modern setting, despite its more traditional begginings. "
  ]
}

const SongNameProject = {
  title: "Song Name Typography",
  images: [
    <img className='project_image' src={songName1} alt='typography design for the britney spears song toxic designed to look like poison symbols' />,
    <img className='project_image' src={songName2} alt='typography design for the garth brooks song friends in low places with low places at the bottom' />,
    <img className='project_image' src={songName3} alt='typography design for the huey lewis song hip to be square with name written in comic sans and in the shape of a square' />,
    <img className='project_image' src={songName4} alt='typography design for the led zeppelin song stairway to heaven where the word stairway is ascending, the o in to is a halo and heaven is white like a cloud' />
  ],
  descriptions: [
    "This was a silly and fun introduction to typography design. We were tasked with using typography to evoke the meaning of song titles.",
    "Coming from a technical background, this was a great way to tap into a different part of my brain. There was some initial discomfort with the idea of putting myself out there in this new way, I knew that to grow I would have to be vulnerable from time to time.",
    "What I didn't expect, was the realization that this type of thinking is directly related to the outside-the-box strategies one might use to solve a complex problem in any field.",
    "In the end, this was a great way to explore some new ways of conveying information."
  ]
}

// const LogoProject = {
//   "title": "Logo Project",
//   "image": logo,
//   "description":"We were tasked with creating a logo"
// }

const DesignProjects = [LogoProject, SongNameProject];

export default DesignProjects;