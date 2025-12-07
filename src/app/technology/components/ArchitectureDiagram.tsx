import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface DataFlowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ArchitectureDiagram = () => {
  const dataFlowSteps: DataFlowStep[] = [
    {
      id: 1,
      title: 'Satellite Data Collection',
      description: 'Multi-spectral imagery from 15+ orbital platforms captured in real-time',
      icon: 'SignalIcon'
    },
    {
      id: 2,
      title: 'Data Processing Pipeline',
      description: 'Cloud-based infrastructure processes terabytes of climate data per hour',
      icon: 'ServerIcon'
    },
    {
      id: 3,
      title: 'AI Model Analysis',
      description: 'Neural networks analyze patterns and generate predictive insights',
      icon: 'CpuChipIcon'
    },
    {
      id: 4,
      title: 'API Distribution',
      description: 'RESTful APIs deliver formatted predictions to client applications',
      icon: 'CloudIcon'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            System Architecture
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From satellite to screen: How RIIBAI transforms raw climate data into actionable intelligence
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {dataFlowSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="bg-card rounded-xl p-6 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Icon name={step.icon} size={28} className="text-white" />
                    </div>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm mb-3">
                      {step.id}
                    </div>
                    <h3 className="font-headline text-lg font-bold text-card-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < dataFlowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <Icon name="ChevronRightIcon" size={24} className="text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-primary/5 rounded-xl p-6 lg:p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <Icon name="InformationCircleIcon" size={24} className="text-secondary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-headline text-lg font-bold text-foreground mb-2">
                Scalable Infrastructure
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Our cloud-based architecture processes over 10TB of satellite data daily, with auto-scaling capabilities to handle peak demand. The system maintains 99.9% uptime with redundant data centers across three continents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;