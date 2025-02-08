import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<section className='footer-address'>
				<h3>Our Address</h3>
				<p>
					123 Embrace Lane
					<br />
					City, State, 12345
				</p>
			</section>
			<section className='footer-info'>
				<p>
					&copy; {new Date().getFullYear()} Embrace Allied Health. All rights reserved.
				</p>
				<a href='#top' className='back-to-top'>
					Return to top
				</a>
			</section>
		</footer>
	);
};

export default Footer;
