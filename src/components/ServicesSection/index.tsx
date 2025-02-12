import React from 'react';
import './ServicesSection.css';
import services from './content.ts';
import { Service } from './content.ts';

// Props for the ServiceCard component
type ServiceCardProps = Service;

// Component for an individual service card
const ServiceCard: React.FC<ServiceCardProps> = (
  { title, description, image, items },
) => {
  return (
    <div className='service-card'>
      {image && <img src={image} alt={title} className='service-card-image' />}
      <h3 className='service-card-title'>{title}</h3>
      <p className='service-card-description'>{description}</p>
      <ul className='services-list'>
        {items.map((item, index) => (
          <li key={index} className='service-item'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main ServicesSection component that renders multiple cards
const ServicesSection: React.FC = () => {
  // Example services data – you can fetch this from an API or define it elsewhere.

  return (
    <section id='services' className='services-section'>
      <h2 className='section-title'>Our Services</h2>
      <div className='services-cards-container'>
        {services.map((service, index) => <ServiceCard key={index} {...service} />)}
      </div>
    </section>
  );
};

export default ServicesSection;
