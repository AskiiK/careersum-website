
import React from 'react';
import Header from './components/Header';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Advantage from './components/Advantage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main className="container mx-auto px-6 py-16 sm:py-24">
        <Philosophy />
        <Services />
        <Advantage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
