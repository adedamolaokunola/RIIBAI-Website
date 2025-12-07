'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Spec {
  category: string;
  items: {
    name: string;
    value: string;
    icon: string;
  }[];
}

const TechnicalSpecs = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const specs: Spec[] = [
    {
      category: 'Weather Prediction Engine',
      items: [
        { name: 'Model Architecture', value: 'Deep Neural Networks', icon: 'CpuChipIcon' },
        { name: 'Training Data', value: '50+ Years Historical', icon: 'ChartBarIcon' },
        { name: 'Prediction Accuracy', value: '99.2%', icon: 'CheckBadgeIcon' },
        { name: 'Update Frequency', value: 'Every 5 Minutes', icon: 'ClockIcon' }
      ]
    },
    {
      category: 'Carbon Analytics',
      items: [
        { name: 'Emission Tracking', value: 'Real-time Monitoring', icon: 'BeakerIcon' },
        { name: 'Impact Scoring', value: 'AI-Powered Analysis', icon: 'SparklesIcon' },
        { name: 'Reduction Insights', value: 'Actionable Recommendations', icon: 'LightBulbIcon' },
        { name: 'Compliance Reports', value: 'Automated Generation', icon: 'DocumentTextIcon' }
      ]
    },
    {
      category: 'Risk Assessment',
      items: [
        { name: 'Threat Detection', value: 'Multi-layer Analysis', icon: 'ShieldCheckIcon' },
        { name: 'Alert System', value: 'Predictive Warnings', icon: 'BellAlertIcon' },
        { name: 'Risk Scoring', value: 'Dynamic Calculation', icon: 'CalculatorIcon' },
        { name: 'Mitigation Plans', value: 'AI-Generated Strategies', icon: 'MapIcon' }
      ]
    },
    {
      category: 'API & Integration',
      items: [
        { name: 'API Types', value: 'RESTful & GraphQL', icon: 'CodeBracketIcon' },
        { name: 'Response Time', value: '<100ms Average', icon: 'BoltIcon' },
        { name: 'Rate Limits', value: 'Scalable Tiers', icon: 'ArrowTrendingUpIcon' },
        { name: 'Documentation', value: 'Interactive Guides', icon: 'BookOpenIcon' }
      ]
    }
  ];

  if (!isHydrated) {
    return (
      <div className="bg-card border border-border rounded-lg p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-surface rounded w-1/3"></div>
          <div className="h-64 bg-surface rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-secondary p-6">
        <h3 className="text-2xl font-headline font-bold text-white mb-2">
          Technical Specifications
        </h3>
        <p className="text-white/90">
          Enterprise-grade infrastructure powering climate intelligence
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 bg-surface border-r border-border">
          {specs.map((spec, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`w-full px-6 py-4 text-left border-b border-border transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-secondary text-secondary-foreground font-semibold'
                  : 'text-muted-foreground hover:bg-surface/80'
              }`}
            >
              {spec.category}
            </button>
          ))}
        </div>

        <div className="lg:w-2/3 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {specs[activeCategory].items.map((item, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-lg p-4 hover:border-secondary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name={item.icon as any} size={20} className="text-secondary" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {item.name}
                  </div>
                </div>
                <div className="text-lg font-semibold text-foreground ml-13">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;