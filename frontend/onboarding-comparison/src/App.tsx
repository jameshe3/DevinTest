import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  const modalScreenshots = [
    {
      title: "Homepage",
      image: "/images/modal-signup.png",
      description: "Clean, minimalist design with Modal logo. Offers $30 free monthly compute. Authentication options include GitHub (primary) and Google. Terms of service agreement required."
    },
    {
      title: "Sign Up Page",
      image: "/images/modal-github.png",
      description: "Standard GitHub OAuth flow for authentication. Users can sign in with existing GitHub account or create a new one. Includes password recovery options and passkey support."
    }
  ]

  const rayScreenshots = [
    {
      title: "Homepage",
      image: "/images/ray-landing.png",
      description: "Clean header with Ray/Anyscale branding. Features 'Get Started' button and highlights key capabilities. Shows customer logos including Uber, OpenAI, Spotify, and Instacart."
    },
    {
      title: "Anyscale Landing",
      image: "/images/ray-platform.png",
      description: "Highlights Ray platform features including faster runtime, developer tooling, cloud flexibility, and AI governance. Clear 'Get Started' CTA."
    },
    {
      title: "Registration Page",
      image: "/images/ray-signup.png",
      description: "Clean, split-screen design. Requires work email for registration. Includes terms acceptance for Anyscale's Terms of Service, Privacy Policy, and Generative AI Supplement."
    }
  ]

  const comparisonPoints = [
    {
      aspect: "Initial Focus",
      modal: "High-performance AI infrastructure with emphasis on compute credits",
      ray: "AI Compute Engine with strong Anyscale platform integration"
    },
    {
      aspect: "Authentication",
      modal: "Direct GitHub/Google sign-in with clear free compute offer",
      ray: "Multi-step process through Anyscale with developer-focused features"
    },
    {
      aspect: "User Experience",
      modal: "Streamlined, single-page signup process",
      ray: "More detailed onboarding with platform-specific information"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Modal vs Ray.io Onboarding Flow Comparison</h1>
        
        <div className="mb-16 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">Key Differences</h2>
          <div className="grid grid-cols-3 gap-4">
            {comparisonPoints.map((point, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-medium text-lg">{point.aspect}</h3>
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-medium">Modal:</span> {point.modal}</p>
                  <p className="text-sm"><span className="font-medium">Ray:</span> {point.ray}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Modal.com</h2>
            {modalScreenshots.map((screen, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{screen.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={screen.image} 
                    alt={screen.title} 
                    className="w-full rounded-md shadow-sm" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <p className="text-red-500 text-sm hidden">Failed to load image</p>
                  <p className="text-gray-600 text-sm">{screen.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Ray.io</h2>
            {rayScreenshots.map((screen, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{screen.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={screen.image} 
                    alt={screen.title} 
                    className="w-full rounded-md shadow-sm" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <p className="text-red-500 text-sm hidden">Failed to load image</p>
                  <p className="text-gray-600 text-sm">{screen.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
