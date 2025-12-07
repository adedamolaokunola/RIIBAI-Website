import Icon from '@/components/ui/AppIcon';

interface Solution {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface SolutionsGridProps {
  className?: string;
}

const SolutionsGrid = ({ className = '' }: SolutionsGridProps) => {
  const solutions: Solution[] = [
    {
      id: 1,
      icon: 'ChartBarIcon',
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive climate intelligence platform with customizable metrics and real-time monitoring.',
      features: ['Custom KPI tracking', 'Predictive modeling', 'Carbon footprint analysis', 'Risk assessment tools']
    },
    {
      id: 2,
      icon: 'CloudIcon',
      title: 'Weather Intelligence API',
      description: 'Enterprise-grade API integration for seamless climate data access across your systems.',
      features: ['99.9% uptime SLA', 'Unlimited API calls', 'Priority data access', 'Custom endpoints']
    },
    {
      id: 3,
      icon: 'ShieldCheckIcon',
      title: 'Climate Risk Management',
      description: 'Proactive risk identification and mitigation strategies powered by AI predictions.',
      features: ['Early warning alerts', 'Scenario planning', 'Impact forecasting', 'Compliance reporting']
    },
    {
      id: 4,
      icon: 'CogIcon',
      title: 'Custom Integration Suite',
      description: 'Tailored solutions that integrate seamlessly with your existing enterprise infrastructure.',
      features: ['ERP integration', 'CRM connectivity', 'Data warehouse sync', 'Custom workflows']
    },
    {
      id: 5,
      icon: 'UserGroupIcon',
      title: 'Dedicated Support Team',
      description: 'White-glove service with dedicated account management and technical support.',
      features: ['24/7 priority support', 'Dedicated account manager', 'Training programs', 'Quarterly reviews']
    },
    {
      id: 6,
      icon: 'DocumentTextIcon',
      title: 'Compliance & Reporting',
      description: 'Automated reporting tools for sustainability compliance and stakeholder communication.',
      features: ['ESG reporting', 'Regulatory compliance', 'Audit trails', 'Custom reports']
    }
  ];

  return (
    <section className={`bg-background py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <span className="text-accent font-semibold text-sm">Enterprise Solutions</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Climate Intelligence Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything your organization needs to make informed, climate-smart decisions with confidence and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-card rounded-xl p-8 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={solution.icon as any} size={28} className="text-accent" />
              </div>
              
              <h3 className="font-headline text-xl font-bold text-card-foreground mb-3">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <ul className="space-y-3">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;