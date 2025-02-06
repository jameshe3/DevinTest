import React from 'react';

const Implementation = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Implementation Guide</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">API Integration</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                {`// Example API Integration
const response = await fetch('https://api.deepseek.ai/v1/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: "Your input text here",
    max_tokens: 100
  })
});`}
              </pre>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Always validate input before sending to the API</li>
                <li>Implement proper error handling and retry mechanisms</li>
                <li>Use appropriate token limits for your use case</li>
                <li>Cache responses when possible to optimize costs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
