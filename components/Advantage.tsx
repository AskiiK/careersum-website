
import React from 'react';
import type { AdvantagePoint } from '../types';

const advantageData: AdvantagePoint[] = [
  {
    id: 1,
    title: 'Real-World Expertise',
    description: 'Benefit from our deep, hands-on experience in product management, leadership, and global consulting.',
  },
  {
    id: 2,
    title: 'Proven Mentorship',
    description: 'A track record of successfully mentoring mid-career professionals and women in technology.',
  },
  {
    id: 3,
    title: 'Personalized Guidance',
    description: 'Your career is unique. We provide bespoke strategies, not one-size-fits-all templates.',
  },
  {
    id: 4,
    title: 'Future-Focused',
    description: 'Our methods emphasize systems, scale, and relevance to thrive in the AI-powered workplace.',
  },
];

const AdvantageItem: React.FC<{ item: AdvantagePoint }> = ({ item }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold">
      {item.id}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="mt-1 text-gray-600">{item.description}</p>
    </div>
  </div>
);

const Advantage: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">The CareerSum Advantage</h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide more than just advice—we provide a framework for growth.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {advantageData.map((item) => (
          <AdvantageItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Advantage;
