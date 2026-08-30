import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Calculators from './components/Calculators';
import TechStack from './components/TechStack';
import ThoughtLeadership from './components/ThoughtLeadership';
import Footer from './components/Footer';
import AdvisoryModal from './components/AdvisoryModal';
import './index.css';

function App() {
  const [isAdvisoryModalOpen, setIsAdvisoryModalOpen] = useState(false);

  const handleOpenAdvisoryModal = () => setIsAdvisoryModalOpen(true);
  const handleCloseAdvisoryModal = () => setIsAdvisoryModalOpen(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenAdvisoryModal={handleOpenAdvisoryModal} />
      
      <main style={{ flex: 1 }}>
        <Hero onOpenAdvisoryModal={handleOpenAdvisoryModal} />
        <Services onOpenAdvisoryModal={handleOpenAdvisoryModal} />
        <CaseStudies onOpenAdvisoryModal={handleOpenAdvisoryModal} />
        <Calculators onOpenAdvisoryModal={handleOpenAdvisoryModal} />
        <TechStack />
        <ThoughtLeadership onOpenAdvisoryModal={handleOpenAdvisoryModal} />
      </main>

      <Footer onOpenAdvisoryModal={handleOpenAdvisoryModal} />

      <AdvisoryModal 
        isOpen={isAdvisoryModalOpen} 
        onClose={handleCloseAdvisoryModal} 
      />
    </div>
  );
}

export default App;
