
import { Check } from "lucide-react";

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
}

const PricingCard = ({ tier }: PricingCardProps) => {
  return (
    <div className={`glass-card p-6 flex flex-col h-full relative ${
      tier.popular ? 'border-accent/50 shadow-lg shadow-accent/10' : ''
    }`}>
      {tier.popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-accent text-white text-sm font-medium px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold">{tier.name}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-extrabold">{tier.price}</span>
          {tier.price !== "Free" && <span className="ml-1 text-sm opacity-70">/month</span>}
        </div>
        <p className="mt-3 text-sm text-slate-300">{tier.description}</p>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-accent flex-shrink-0 mr-2" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-2 rounded-lg font-medium transition-all duration-200 ${
        tier.popular
          ? 'bg-accent hover:bg-accent/90 text-white'
          : 'bg-white/20 hover:bg-white/30 text-white'
      }`}>
        {tier.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
