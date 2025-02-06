import React from 'react';

export const OnboardingComparison: React.FC = () => {
  const modalSteps = [
    {
      title: "Initial Sign Up Page",
      description: "Clean, minimalist design with Modal logo. Offers $30 free monthly compute. Authentication options include GitHub (primary) and Google. Terms of service agreement required.",
      image: "/images/modal-signup.png"
    },
    {
      title: "GitHub Authentication",
      description: "Standard GitHub OAuth flow for authentication. Users can sign in with existing GitHub account or create a new one. Includes password recovery options and passkey support.",
      image: "/images/modal-github.png"
    }
  ];

  const raySteps = [
    {
      title: "Ray.io Landing Page",
      description: "Clean header with Ray/Anyscale branding. Features 'Get Started' button and highlights key capabilities. Shows customer logos including Uber, OpenAI, Spotify, and Instacart.",
      image: "/images/ray-landing.png"
    },
    {
      title: "Anyscale Platform Page",
      description: "Highlights Ray platform features including faster runtime, developer tooling, cloud flexibility, and AI governance. Clear 'Get Started' CTA.",
      image: "/images/ray-platform.png"
    },
    {
      title: "Email Registration",
      description: "Clean, split-screen design. Requires work email for registration. Includes terms acceptance for Anyscale's Terms of Service, Privacy Policy, and Generative AI Supplement.",
      image: "/images/ray-signup.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Modal vs Ray Onboarding Flow Comparison</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Modal Onboarding</h2>
          <div className="space-y-8">
            {modalSteps.map((step, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Ray Onboarding</h2>
          <div className="space-y-8">
            {raySteps.map((step, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Key Differences</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Modal emphasizes social authentication (GitHub/Google) while Ray uses email-first registration</li>
          <li>Modal's flow is more direct (2 steps) compared to Ray's longer flow (3 steps)</li>
          <li>Ray routes through Anyscale (their commercial platform) while Modal maintains its own platform</li>
          <li>Both offer free compute credits, but present them differently</li>
          <li>Ray's messaging is more enterprise-focused while Modal's is more developer-centric</li>
        </ul>
      </div>
    </div>
  );
};
