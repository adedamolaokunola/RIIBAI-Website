import Icon from '@/components/ui/AppIcon';

interface AccessTier {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  icon: string;
  popular?: boolean;
}

interface AccessTierCardProps {
  tier: AccessTier;
  onSelect: (tierId: string) => void;
}

const AccessTierCard = ({ tier, onSelect }: AccessTierCardProps) => {
  return (
    <div className={`relative bg-card rounded-lg p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      tier.popular ? 'border-accent shadow-lg' : 'border-border hover:border-secondary'
    }`}>
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 mx-auto">
        <Icon name={tier.icon as any} size={32} className="text-secondary" />
      </div>
      
      <h3 className="text-2xl font-bold text-card-foreground text-center mb-2 font-headline">
        {tier.name}
      </h3>
      
      <p className="text-muted-foreground text-center mb-6">
        {tier.description}
      </p>
      
      <ul className="space-y-3 mb-6">
        {tier.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Icon name="CheckCircleIcon" size={20} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-card-foreground">{benefit}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => onSelect(tier.id)}
        className={`w-full py-3 rounded-md font-semibold transition-all duration-300 ${
          tier.popular
            ? 'bg-accent text-accent-foreground hover:bg-accent/90'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
        }`}
      >
        Select {tier.name}
      </button>
    </div>
  );
};

export default AccessTierCard;