import React, { ChangeEvent, FormEvent, useState } from 'react';
import './ContactForm.css';

interface ContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	description: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<ContactFormData>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		description: '',
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form Submitted:', formData);
		setSubmitted(true);
		// Process the data (e.g., send it to an API)
	};

	return (
		<section className='contact-section'>
			<h2 className='section-title'>Contact Us</h2>
			{!submitted && (
				<form className='contact-form' onSubmit={handleSubmit}>
					<div className='form-row'>
						<div className='form-field'>
							<label htmlFor='firstName'>First Name</label>
							<input
								type='text'
								id='firstName'
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='form-field'>
							<label htmlFor='lastName'>Last Name</label>
							<input
								type='text'
								id='lastName'
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
								required
							/>
						</div>
					</div>
					<div className='form-row'>
						<div className='form-field'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='form-field'>
							<label htmlFor='phone'>Phone</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className='form-row'>
						<div className='form-field full-width'>
							<label htmlFor='description'>Description</label>
							<textarea
								id='description'
								name='description'
								value={formData.description}
								onChange={handleChange}
								rows={5}
								required
							>
							</textarea>
						</div>
					</div>
					<div className='form-row'>
						<button type='submit' className='submit-button'>
							Submit
						</button>
					</div>
				</form>
			)}
			{submitted && <div>Submitted</div>}
		</section>
	);
};

export default ContactForm;
