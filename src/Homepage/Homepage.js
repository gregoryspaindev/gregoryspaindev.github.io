import './Homepage.css'

function Homepage(props) {
  
  return (
    <div className='homepage_container'>
      <div className='homepage_greeting'>Welcome to my portfolio site.</div>
      <br/>
      <p className='homepage_content'>I am a full-stack Web Devoloper with a Bachelor's Degree from
        <a href='www.clarkstate.edu' target='blank'> Clark State College</a> in Springfield, OH.
        This website was created with React as the final project for my Senior
        Capstone Class.
      </p>
      <br/>
      <p className='homepage_content'>This degree program provided a unique opportunity to study elements of
        design and UI/UX along with learning the fundamentals of Front &amp; Back End Web Development.
        I chose a handful of projects from both the "Design" and "Development" realms to showcase the
        different skills learned in each.</p>
      <br/>
      <p className='homepage_content'>Before embarking on my journey as a developer, I had a career in the Telecom
       industry as an Outside Plant Engineer. You can learn more about the skills and values I learned in that
       career on the Previous Experience page.</p>
       <div className='button_container'>
        <button className='nav_button' onClick={props.showDesign}>Design</button>
        <button className='nav_button' onClick={props.showDev}>Development</button>
       </div>
    </div>
  )
}

export default Homepage;