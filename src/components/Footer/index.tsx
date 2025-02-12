import './Footer.css';
import { scrollTo } from '../../shared/utils.ts';

const Footer = () => {
  return (
    <footer className='footer'>
	  <div className="footer-wrapper">

		
      <section className='footer-address'>
        <h3>Our Address</h3>
        <p>
			Unit 8,<br />
			12 Endeavour Boulevard,<br />
			North Lakes,<br />
			QLD,<br />
			4509
        </p>
      </section>
      <section className='footer-info'>
        <p>
          &copy; {new Date().getFullYear()} Embrace Allied Health. All rights reserved.<br />
		  Photo by <a href="https://unsplash.com/@hesterqiang?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hester Qiang</a> on <a href="https://unsplash.com/photos/white-and-black-quote-board-on-green-plants-95t94hZTESw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </p>
        <a className='back-to-top' onClick={scrollTo('header')}>
          Return to top
        </a>
      </section>
	  </div>
    </footer>
  );
};

export default Footer;
