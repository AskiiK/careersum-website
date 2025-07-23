
import React from 'react';
import type { Service } from '../types';

const servicesData: Service[] = [
  {
    title: '1:1 Career Strategy',
    description: 'Personalized coaching sessions to define your goals and create a strategic roadmap for success.',
  },
  {
    title: 'Resume & LinkedIn Makeovers',
    description: 'Craft a compelling narrative that stands out to recruiters and hiring managers in the digital age.',
  },
  {
    title: 'Interview & Mock Sessions',
    description: 'Build confidence and master the art of interviewing with expert feedback and preparation.',
  },
  {
    title: 'Return-to-Work Programs',
    description: 'Specialized support for women re-entering the workforce, focusing on confidence and modern workplace skills.',
  },
  {
    title: 'Corporate Workshops',
    description: 'Team training on OKRs, product thinking, and strategic planning to elevate your organization\'s performance.',
  },
  {
    title: 'AI Prompt Engineering',
    description: 'Master the art of communicating with AI to boost your productivity and creative output in any role.'
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gray-300/50">
    <h3 className="text-xl font-bold text-blue-700">{service.title}</h3>
    <p className="mt-2 text-gray-600">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">How We Help You Succeed</h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Our services are tailored to meet the needs of ambitious professionals.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
