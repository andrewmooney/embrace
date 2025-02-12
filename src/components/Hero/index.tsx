import './Hero.css';
import heroImage from '../../assets/images/hester-qiang-95t94hZTESw-unsplash.jpg';
import { scrollTo } from '../../shared/utils.ts';

const Hero = () => {
  const heroData = {
    title: 'Embracing the journey with you every step of the way',
    body:
      `At Embrace, we support young people and their families on their  development journey. Our allied health professionals guide you in building self-awareness, enhancing skills, and navigating life’s challenges. Together, we’ll unlock your full potential and embrace every step of the journey.`,
    image: heroImage,
    alt: 'Image of a sign with the quote: The journey of a thousand miles begins with a single step. - Lao Tzu',
  };

  return (
    <div className='hero-wrapper'>
      <section className='hero-section'>
        <div className='hero-text'>
          <h2 className='hero-title'>
            <span className='bold'>Embracing</span> the <span className='bold'>journey</span>{' '}
            with you every step of the way
          </h2>
          <p className='sen-light'>{heroData.body}</p>
          <button className='btn-primary' onClick={scrollTo('services')}>Learn More</button>
        </div>
        <div className='hero-image'>
          <img src={heroData.image} alt={heroData.alt} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
