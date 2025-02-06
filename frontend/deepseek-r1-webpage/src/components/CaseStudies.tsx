import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      company: 'Enterprise Solutions Inc.',
      challenge: 'Needed to process large volumes of customer support tickets',
      solution: 'Implemented DeepSeek-R1 for automated ticket classification and response generation',
      outcome: '60% reduction in response time and 40% cost savings'
    },
    {
      company: 'Tech Innovations Ltd.',
      challenge: 'Required accurate code analysis and documentation',
      solution: 'Utilized DeepSeek-R1 for code review and documentation generation',
      outcome: 'Improved code quality by 45% and reduced documentation time by 70%'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{case_.company}</h3>
              <div className="space-y-4">
                <p><span className="font-medium">Challenge:</span> {case_.challenge}</p>
                <p><span className="font-medium">Solution:</span> {case_.solution}</p>
                <p><span className="font-medium">Outcome:</span> {case_.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
