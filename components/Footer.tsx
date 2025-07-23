
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12 text-center">
        <h3 className="text-2xl font-bold">Ready to Build Your Future?</h3>
        <p className="mt-2 text-gray-400">
          Let's start the conversation. Connect with us or book your free discovery call today.
        </p>
        <div className="mt-6">
          <a
            href="mailto:car33rsum@yourdomain.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40"
          >
            Book a Free Call
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/abhishekkumar10/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Abhishek Kumar
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://www.linkedin.com/in/sanskriti-80392b54/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Sanskriti
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500">&copy; {new Date().getFullYear()} CareerSum. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
