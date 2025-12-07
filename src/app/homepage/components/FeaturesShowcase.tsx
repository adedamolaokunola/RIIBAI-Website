import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const mockFeatures: Feature[] = [
  {
    id: 1,
    icon: 'BoltIcon',
    title: 'Hyper-Accurate Predictions',
    description: 'AI-powered weather forecasting with 99.2% accuracy using advanced satellite data analytics and machine learning algorithms.',
    color: 'accent'
  },
  {
    id: 2,
    icon: 'ChartBarIcon',
    title: 'Carbon Analytics',
    description: 'Real-time carbon footprint tracking and optimization recommendations to help your organization achieve sustainability goals.',
    color: 'secondary'
  },
  {
    id: 3,
    icon: 'ShieldCheckIcon',
    title: 'Risk Scoring',
    description: 'Comprehensive climate risk assessment with predictive modeling to protect your assets and operations from weather events.',
    color: 'conversion'
  },
  {
    id: 4,
    icon: 'BellAlertIcon',
    title: 'Predictive Alerts',
    description: 'Intelligent early warning system that notifies you of potential climate events before they impact your business operations.',
    color: 'success'
  }
];

const FeaturesShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-4">
            <Icon name="CpuChipIcon" size={20} className="text-secondary" variant="solid" />
            <span className="text-sm font-medium text-foreground">Powered by Advanced AI</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Climate Intelligence at Your Fingertips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage cutting-edge technology to transform complex climate data into actionable insights for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={feature.icon as any} size={28} className={`text-${feature.color}`} variant="solid" />
              </div>
              <h3 className="font-headline text-xl font-bold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;