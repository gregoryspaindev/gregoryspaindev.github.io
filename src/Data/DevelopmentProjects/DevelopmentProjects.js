import birdAppAddVisit from '../../assets/birdAppAddVisit.png';
import birdAppChooseVisit from '../../assets/birdAppChooseVisit.png';
import birdAppUserPage from '../../assets/birdAppUserPage.png';
import birdAppViewVisit from '../../assets/birdAppViewVisit.png';

import HarrysCart from '../../assets/HarrysCart.jpg';
import HarrysEmployee from '../../assets/HarrysEmployee.jpg';
import HarrysHomepage from '../../assets/HarrysHomepage.jpg';
import HarrysInventory from '../../assets/HarrysInventory.jpg';
import HarrysRegistration from '../../assets/HarrysRegistration.jpg';

import existingBruckner from '../../assets/existingBruckner.png'
import myBrucknerHome from '../../assets/myBruknerHome.png';
import myBrucknerMobile from '../../assets/myBruknerMobile.png';
import newBrucknerHome from '../../assets/newBrucknerHome.png';
import newBrucknerForm from '../../assets/newBrucknerForm.png';



const BirdAppProject = {
  title: "Birdhouse Tracker App",
  images: [
    <img className='project_image' src={birdAppUserPage} alt='user page with two buttons to add or view a visit' />,
    <img className='project_image' src={birdAppAddVisit} alt='form for adding visit details'/>,
    <img className='project_image' src={birdAppChooseVisit} alt='page to choose a visit to view' />,
    <img className='project_image' src={birdAppViewVisit} alt='page with details of a previously entered visit' />
  ],
  descriptions: [
    "This app was created with Flask and MySQL as part of my Python for Web Development class. The goal was to create an application to log the information collected during the inspection of a number of birdhouses kept by the Miami Valley Audobon Society. The app had to support user authentication and the ability to add, edit, and view visit details. This is the User landing page.",
    "Here is the form for collecting the visit data. The dropdown menus are preloaded with data stored in the linked MySQL database. The data is stored in a 'visit' table in the database, and the logic will automatically store the name of a new bird if it is not already present in the database.",
    "On this page, the user can choose from a list of all visits, or filter the visits by birdhouse. Clicking a visit date takes the user to the visit details.",
    "Not only can the user view the visit details, they can edit them if needed. I tried to match the entry form directly so it would be seamless for editing.",
  ]
}

const HarrysHotSauceProject = {
  title: "Harry's Hot Sauce",
  images: [
    <img className='project_image' src={HarrysHomepage} alt="homepage for harry's hot sauce, showing register and login for users and a selection of hot sauces." />,
    <img className='project_image' src={HarrysRegistration} alt="the user registration form for harry's hot sauce." />,
    <img className='project_image' src={HarrysCart} alt="the cart page for harry's hot sauce with several items in the cart." />,
    <img className='project_image' src={HarrysEmployee} alt="harry's hot sauce employee information maintenance form." />,
    <img className='project_image' src={HarrysInventory} alt="harry's hot sauce inventory management form." />
  ],
  descriptions: [
    `This project was a spicy one. As part of a class called Advanced Projects, we created a php and MySQL based e-commerce site for a fictional Hot Sauce Company. The project is based on instructions in the book 'Building a Basic E-Commerce Site' by James McKitrick.
    The homepage shows a collection of hot sauces and has links to allow a user to register or log in. The sauce contianers are dynamically created from the product table in the MySQL database.`,
    "The user is required to register in order to add items to their cart. This form accepts the registration and the data is saved to the database upon submission.",
    "Once the user is logged in, they will have a cart display in the upper right-hand corner of the page which tracks the number of items ordered. Clicking that will take the user to the cart page, allowing the user to edit the quantity of or remove each item. It displays the running total at the bottom of the page.",
    "Another aspect of the project was maintaining a list of employees. These employees, once logged in, had access to a rescrited portion of the website where the inventory can be managed.",
    "The employees can either add a new sauce, or choose an existing sauce to edit from the dropdown list. Any changes or additions will be dynanmically rendered by the Home and Products pages."
  ]
}

const BrucknerProject = {
  title: "Bruckner Nature Center Redesign",
  images: [
    <img className='project_image' src={existingBruckner} alt='existing bruckner nature center homepage.' />,
    <img className='project_image' src={myBrucknerHome} alt='an html and css homepage redesign for bruckner nature center utilizing similar design elements.'/>,
    <img className='project_image' src={myBrucknerMobile} alt='mobile view of a redesigned homepage.' />,
    <img className='project_image' src={newBrucknerHome} alt='the new squarespace bruckner homepage. this page will go live spring of 2024.' />,
    <img className='project_image' src={newBrucknerForm} alt='a web form on the new bruckner squarespace page. this page will go live spring of 2024.' />
  ],
  descriptions: [
    "Bruckner Nature Center is a non-profit animal rescue and nature preserve. They contacted our program director for help with redesigning their aging website. The site lacked true mobile responsiveness, and was overall in need of modernization.",
    "The project started several semesters ago with a class exercises to create a responsive redeisgn of a couple pages of the site. I wanted to keep the field journal feel of the existing site so I used a natural paper texture background and a font that evoked handwriting.",
    "The mobile version I mocked up keeps the same aesthetic, but collapses the content to one column. This was a good learning experience. I used Bootstrap for this project, which helped me greatly at the time. However, if I had to do this today I would likely just use CSS flexbox and media queries.",
    "In fall 2023 our Senior Project class was assigned a group project to undertake a complete overhaul of the Bruckner Website. This is an actual website that will go live in the Spring of 2024. Since Bruckner will ultimately maintain the site themselves, the decision was made to use Squarespace to create and host the site. This is the landing page.",
    "One of the great benefits of Squarespace is the ability to create forms to capture data and the built-in tools to maintain it. This is something they were currently unable to do, which meant for any situation where data needed to be submitted, customers were required to download a pdf and send it back to Bruckner."
  ]
}

// const LogoProject = {
//   "title": "Logo Project",
//   "image": logo,
//   "description":"We were tasked with creating a logo"
// }

const DevelopmentProjects = [BirdAppProject, HarrysHotSauceProject, BrucknerProject];

export default DevelopmentProjects;