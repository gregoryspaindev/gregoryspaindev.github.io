import pole1 from '../../assets/pole1.jpg';
import poleCloseUp from '../../assets/poleCloseUp.jpg'
import engineeringMap from '../../assets/engineeringMap.png'



const OSPEngineer = {
  title: "Outside Plant Engineer",
  images: [
    <img className='project_image' src={pole1} alt='a utility pole' />,
    <img className='project_image' src={poleCloseUp} alt='close up of a utility pole' />,
    <img className='project_image' src={engineeringMap} alt='a telecom engineering map' />
  ],
  descriptions: [
    "I had a 10 year career in the Telecommunications field as an Outside Plant Engineer. In this capacity I performed many roles, from acting as an inspector on active construction projects to engineering projects for companies like AT&T.",
    "After beginning as an Inspector, I became a Surveyor. One thing I learned is that no matter how many utility poles I photographed and measured, it was important to treat each one as a unique entity. No guesses, no assumptions. I try to use this approach with any project I tackle. One of the biggestest traps we can fall into is being so confident as to become careless.",
    "The highlight of my career was engineering Fiber-to-the-Home projects for AT&T. I was given a project number and a rough outline of the project and from there it was up to me to figure out exactly what needed surveyed and engineered, which permits to apply for from the city the project was located in. From there I would survey the project, engineer it, and draft the plans. The largest project I engineered placed more than 56k feet of fiber in Blavklick, OH."
  ]
}

const PrevExp = [OSPEngineer];

export default PrevExp;