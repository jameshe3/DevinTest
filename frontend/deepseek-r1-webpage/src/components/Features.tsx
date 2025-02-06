import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Advanced Language Processing',
      description: 'State-of-the-art natural language understanding and generation capabilities'
    },
    {
      title: 'Enterprise-Ready',
      description: 'Scalable architecture designed for business applications with robust security'
    },
    {
      title: 'Real-time Processing',
      description: 'Fast and efficient processing for immediate response requirements'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
