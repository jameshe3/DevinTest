import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  const modalScreenshots = [
    {
      title: "Homepage",
      image: "https://raw.githubusercontent.com/jameshe3/DevinTest/main/docs/onboarding-comparison/screenshots/modal_065146.png",
      description: "Clean, modern design focused on high-performance AI infrastructure. Offers $30/month free compute and clear navigation options."
    },
    {
      title: "Sign Up Page",
      image: "https://raw.githubusercontent.com/jameshe3/DevinTest/main/docs/onboarding-comparison/screenshots/modal_signup_next_065159.png",
      description: "Simple authentication options with GitHub and Google sign-in. Reinforces the $30 free monthly compute offer."
    }
  ]

  const rayScreenshots = [
    {
      title: "Homepage",
      image: "https://raw.githubusercontent.com/jameshe3/DevinTest/main/docs/onboarding-comparison/screenshots/ray_io_065228.png",
      description: "Focus on 'The AI Compute Engine' with multiple calls-to-action. Strong integration with Anyscale platform."
    },
    {
      title: "Anyscale Landing",
      image: "https://raw.githubusercontent.com/jameshe3/DevinTest/main/docs/onboarding-comparison/screenshots/anyscale_ray_on_065244.png",
      description: "Branded as 'Best Way to Run Ray' with emphasis on developer features and multi-cloud support."
    },
    {
      title: "Registration Page",
      image: "https://raw.githubusercontent.com/jameshe3/DevinTest/main/docs/onboarding-comparison/screenshots/console_anyscale_065300.png",
      description: "Registration form loading screen within the Anyscale console."
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
