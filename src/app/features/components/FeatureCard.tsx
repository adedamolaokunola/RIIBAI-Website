import Icon from '@/components/ui/AppIcon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  color: 'blue' | 'green' | 'orange' | 'purple';
}

const colorClasses = {
  blue: 'bg-secondary/10 text-secondary border-secondary/20',
  green: 'bg-accent/10 text-accent border-accent/20',
  orange: 'bg-conversion/10 text-conversion border-conversion/20',
  purple: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
};

const FeatureCard = ({ icon, title, description, metrics, color }: FeatureCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-lg p-6 hover:border-secondary/40 hover:shadow-xl transition-all duration-300">
      <div className={`w-14 h-14 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon name={icon as any} size={28} variant="outline" />
      </div>
      
      <h3 className="text-xl font-headline font-bold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-surface rounded-lg p-3">
            <div className={`text-2xl font-bold ${color === 'blue' ? 'text-secondary' : color === 'green' ? 'text-accent' : color === 'orange' ? 'text-conversion' : 'text-purple-500'}`}>
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;