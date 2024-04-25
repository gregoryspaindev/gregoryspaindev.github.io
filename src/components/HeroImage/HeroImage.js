import './HeroImage.css';
import headerImage from '../../assets/edited-image.png';

function HeroImage() {
  return (
    <div className='hero_image'>
      <div className='hero_image_container'>
        <img src={headerImage} alt='me at my computer' />
      </div>
    </div>
  )
}

export default HeroImage;