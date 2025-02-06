import React from 'react';

const TechnicalSpecs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Model Architecture</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-medium mr-2">Model Size:</span>
                <span>70B parameters</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Architecture:</span>
                <span>Transformer-based with advanced attention mechanisms</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Training Data:</span>
                <span>Diverse dataset including code, technical documentation, and enterprise content</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
