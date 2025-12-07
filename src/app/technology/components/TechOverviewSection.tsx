import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TechFeature {
  id: number;
  icon: string;
  title: string;
  description: string;
  metric: string;
}

const TechOverviewSection = () => {
  const techFeatures: TechFeature[] = [
    {
      id: 1,
      icon: 'CpuChipIcon',
      title: 'Neural Network Architecture',
      description: 'Advanced deep learning models trained on 50+ years of historical climate data with continuous learning capabilities.',
      metric: '99.2% Accuracy'
    },
    {
      id: 2,
      icon: 'GlobeAltIcon',
      title: 'Satellite Data Integration',
      description: 'Real-time processing of multi-spectral satellite imagery from 15+ orbital platforms for comprehensive Earth observation.',
      metric: '24/7 Coverage'
    },
    {
      id: 3,
      icon: 'BoltIcon',
      title: 'Predictive Analytics',
      description: 'Machine learning algorithms that identify weather patterns and predict climate events up to 14 days in advance.',
      metric: '14-Day Forecast'
    },
    {
      id: 4,
      icon: 'ChartBarIcon',
      title: 'Carbon Intelligence',
      description: 'Integrated carbon footprint analysis that correlates weather patterns with emission reduction opportunities.',
      metric: '30% Reduction'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technology Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered engine combines cutting-edge machine learning with real-time satellite data to deliver unparalleled weather intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {techFeatures.map((feature) => (
            <div 
              key={feature.id}
              className="bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <Icon name={feature.icon} size={24} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-xl font-bold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-semibold text-accent">{feature.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechOverviewSection;