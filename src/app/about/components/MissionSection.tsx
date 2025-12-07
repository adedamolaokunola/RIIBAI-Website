import Icon from '@/components/ui/AppIcon';

interface MissionMetric {
  id: number;
  value: string;
  label: string;
  icon: string;
}

interface MissionSectionProps {
  className?: string;
}

const MissionSection = ({ className = '' }: MissionSectionProps) => {
  const metrics: MissionMetric[] = [
    {
      id: 1,
      value: '99.7%',
      label: 'Prediction Accuracy',
      icon: 'ChartBarIcon'
    },
    {
      id: 2,
      value: '2.5M+',
      label: 'Data Points Analyzed Daily',
      icon: 'CircleStackIcon'
    },
    {
      id: 3,
      value: '45+',
      label: 'Research Partnerships',
      icon: 'AcademicCapIcon'
    },
    {
      id: 4,
      value: '18K',
      label: 'Tons CO₂ Reduced',
      icon: 'CloudIcon'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Mission: Climate Intelligence for Everyone
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At RIIBAI, we believe that access to accurate climate intelligence should not be a privilege reserved for large corporations. Our mission is to democratize weather prediction and carbon analytics through artificial intelligence, empowering organizations of all sizes to make data-driven decisions that benefit both their operations and the planet.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              By combining satellite data with advanced machine learning models, we transform complex environmental data into clear, actionable insights. Every prediction we make, every alert we send, and every carbon calculation we provide is designed to help our users prepare for climate challenges while reducing their environmental impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a future where climate intelligence is as accessible as weather forecasts, where businesses can confidently plan sustainable operations, and where technology serves as a bridge between environmental responsibility and economic success.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                  <Icon name={metric.icon as any} size={24} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;