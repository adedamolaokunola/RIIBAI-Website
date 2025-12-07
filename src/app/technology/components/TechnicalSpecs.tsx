import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Specification {
  id: number;
  category: string;
  specs: {
    label: string;
    value: string;
  }[];
}

const TechnicalSpecs = () => {
  const specifications: Specification[] = [
    {
      id: 1,
      category: 'API Performance',
      specs: [
        { label: 'Response Time', value: '< 200ms average' },
        { label: 'Uptime SLA', value: '99.9% guaranteed' },
        { label: 'Rate Limits', value: '10,000 requests/hour' },
        { label: 'Data Refresh', value: 'Every 15 minutes' }
      ]
    },
    {
      id: 2,
      category: 'Data Coverage',
      specs: [
        { label: 'Geographic Coverage', value: 'Global (195 countries)' },
        { label: 'Satellite Sources', value: '15+ orbital platforms' },
        { label: 'Historical Data', value: '50+ years archive' },
        { label: 'Forecast Range', value: 'Up to 14 days' }
      ]
    },
    {
      id: 3,
      category: 'AI Model Specifications',
      specs: [
        { label: 'Model Architecture', value: 'Deep Neural Networks' },
        { label: 'Training Dataset', value: '10TB+ climate data' },
        { label: 'Prediction Accuracy', value: '99.2% validated' },
        { label: 'Update Frequency', value: 'Continuous learning' }
      ]
    },
    {
      id: 4,
      category: 'Security & Compliance',
      specs: [
        { label: 'Authentication', value: 'OAuth 2.0 + API Keys' },
        { label: 'Encryption', value: 'TLS 1.3 in transit' },
        { label: 'Data Privacy', value: 'GDPR & CCPA compliant' },
        { label: 'Certifications', value: 'ISO 27001, SOC 2 Type II' }
      ]
    }
  ];

  return (
    <section id="technical-specs" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical details about RIIBAI's infrastructure, performance, and capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {specifications.map((spec) => (
            <div 
              key={spec.id}
              className="bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-headline text-xl font-bold text-card-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="CpuChipIcon" size={20} className="text-secondary" />
                </div>
                {spec.category}
              </h3>
              <div className="space-y-4">
                {spec.specs.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <span className="text-sm text-muted-foreground font-medium">{item.label}</span>
                    <span className="text-sm text-foreground font-semibold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-6 lg:p-8 border border-secondary/20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
              <Icon name="DocumentTextIcon" size={32} className="text-secondary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                Complete API Documentation
              </h3>
              <p className="text-muted-foreground mb-4">
                Access our comprehensive API documentation with detailed endpoint references, authentication guides, error handling, and best practices for integration.
              </p>
              <a 
                href="/early-access" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300"
              >
                View Full Documentation
                <Icon name="ArrowRightIcon" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;