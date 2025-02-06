import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TechnicalSpecs from './components/TechnicalSpecs';
import Implementation from './components/Implementation';
import CaseStudies from './components/CaseStudies';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TechnicalSpecs />
      <Implementation />
      <CaseStudies />
    </div>
  )
}

export default App
