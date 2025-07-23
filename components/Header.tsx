
import React from 'react';

const Header: React.FC = () => {
  const heroStyle = {
    backgroundImage: `url('https://picsum.photos/seed/career/1600/900')`,
    backgroundBlendMode: 'overlay',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <header className="bg-gray-900 text-white" style={heroStyle}>
      <div className="bg-black bg-opacity-60 py-20 sm:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight">Design a Career with Intent & Impact</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-gray-300">
            We blend 25+ years of global tech and consulting experience with an AI-driven, human-led approach to help you build a future-proof career.
          </p>
          <div className="mt-10">
            <a
              href="mailto:car33rsum@yourdomain.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40"
            >
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
