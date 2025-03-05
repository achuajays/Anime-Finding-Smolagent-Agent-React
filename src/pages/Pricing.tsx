
import PageLayout from "@/components/layout/PageLayout";
import PricingCard, { PricingTier } from "@/components/ui-custom/PricingCard";
import { CheckCircle, HelpCircle } from "lucide-react";

const Pricing = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for casual anime fans who want to explore.",
      features: [
        "10 searches per day",
        "Basic anime information",
        "Genre filtering",
        "Web access only"
      ],
      buttonText: "Get Started",
    },
    {
      name: "Premium",
      price: "$9.99",
      description: "For serious anime enthusiasts who want more features.",
      features: [
        "Unlimited searches",
        "Detailed anime information",
        "Advanced filtering options",
        "Personalized recommendations",
        "Mobile app access",
        "No advertisements"
      ],
      buttonText: "Subscribe Now",
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$19.99",
      description: "The complete package for hardcore anime fans.",
      features: [
        "Everything in Premium",
        "Early access to new features",
        "API access for developers",
        "Offline mode",
        "Custom watchlists",
        "Priority support",
        "Exclusive content"
      ],
      buttonText: "Go Ultimate",
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 animate-fade-in">Choose Your Plan</h1>
            <p className="text-lg text-slate-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Find the perfect AnimeQuest plan that fits your needs and budget.
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto py-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className="animate-slide-up" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <PricingCard tier={tier} />
              </div>
            ))}
          </div>
        </section>
        
        {/* Features Comparison */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Features Comparison</h2>
            
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="px-6 py-4 text-left">Feature</th>
                      <th className="px-6 py-4 text-center">Free</th>
                      <th className="px-6 py-4 text-center">Premium</th>
                      <th className="px-6 py-4 text-center">Ultimate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <FeatureRow 
                      feature="Daily Searches" 
                      free="10" 
                      premium="Unlimited" 
                      ultimate="Unlimited" 
                    />
                    <FeatureRow 
                      feature="Detailed Anime Info" 
                      free={false} 
                      premium={true} 
                      ultimate={true} 
                    />
                    <FeatureRow 
                      feature="Advanced Filtering" 
                      free={false} 
                      premium={true} 
                      ultimate={true} 
                    />
                    <FeatureRow 
                      feature="Personalized Recommendations" 
                      free={false} 
                      premium={true} 
                      ultimate={true} 
                    />
                    <FeatureRow 
                      feature="Mobile App Access" 
                      free={false} 
                      premium={true} 
                      ultimate={true} 
                    />
                    <FeatureRow 
                      feature="Ad-Free Experience" 
                      free={false} 
                      premium={true} 
                      ultimate={true} 
                    />
                    <FeatureRow 
                      feature="API Access" 
                      free={false} 
                      premium={false} 
                      ultimate={true} 
                    />
                    <FeatureRow 
                      feature="Custom Watchlists" 
                      free={false} 
                      premium={false} 
                      ultimate={true} 
                    />
                    <FeatureRow 
                      feature="Priority Support" 
                      free={false} 
                      premium={false} 
                      ultimate={true} 
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <FAQItem 
                question="Can I cancel my subscription at any time?"
                answer="Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
              />
              
              <FAQItem 
                question="How accurate are the search results?"
                answer="Our AI-powered search delivers results with over 95% accuracy. The more specific your query, the better the results will be."
              />
              
              <FAQItem 
                question="Is my payment information secure?"
                answer="Absolutely. We use industry-standard encryption and security measures to protect your payment information."
              />
              
              <FAQItem 
                question="Can I upgrade or downgrade my plan?"
                answer="Yes, you can easily upgrade or downgrade your plan at any time through your account settings."
              />
              
              <FAQItem 
                question="What payment methods do you accept?"
                answer="We accept all major credit cards, PayPal, and select regional payment methods."
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="glass-card p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Anime Journey?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of anime fans who use AnimeQuest to discover their next favorite series.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-shine px-8 py-3">
                Get Started for Free
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

interface FeatureRowProps {
  feature: string;
  free: boolean | string;
  premium: boolean | string;
  ultimate: boolean | string;
}

const FeatureRow = ({ feature, free, premium, ultimate }: FeatureRowProps) => (
  <tr className="hover:bg-white/5">
    <td className="px-6 py-4">{feature}</td>
    <td className="px-6 py-4 text-center">
      {typeof free === 'boolean' ? (
        free ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-slate-400">—</span>
      ) : (
        free
      )}
    </td>
    <td className="px-6 py-4 text-center">
      {typeof premium === 'boolean' ? (
        premium ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-slate-400">—</span>
      ) : (
        premium
      )}
    </td>
    <td className="px-6 py-4 text-center">
      {typeof ultimate === 'boolean' ? (
        ultimate ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-slate-400">—</span>
      ) : (
        ultimate
      )}
    </td>
  </tr>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <div className="glass-card p-6">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 pt-1">
        <HelpCircle className="w-5 h-5 text-accent" />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">{question}</h3>
        <p className="text-slate-300">{answer}</p>
      </div>
    </div>
  </div>
);

export default Pricing;
