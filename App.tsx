import React from 'react';
import Header from './components/Header.tsx';
import Philosophy from './components/Philosophy.tsx';
import Services from './components/Services.tsx';
import Advantage from './components/Advantage.tsx';
import Footer from './components/Footer.tsx';

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