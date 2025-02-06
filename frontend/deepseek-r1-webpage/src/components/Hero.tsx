import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">DeepSeek-R1</h1>
        <p className="text-xl mb-8">Advanced Language Model for Enterprise AI Solutions</p>
        <div className="max-w-3xl">
          <p className="text-lg mb-4">
            DeepSeek-R1 is a state-of-the-art language model designed for enterprise applications,
            offering superior performance in natural language understanding and generation tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
