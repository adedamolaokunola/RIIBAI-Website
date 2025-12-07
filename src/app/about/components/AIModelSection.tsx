'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ModelFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface TechnicalSpec {
  id: number;
  label: string;
  value: string;
}

interface AIModelSectionProps {
  className?: string;
}

const AIModelSection = ({ className = '' }: AIModelSectionProps) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'training' | 'accuracy'>('architecture');

  const modelFeatures: ModelFeature[] = [
    {
      id: 1,
      title: 'Deep Neural Networks',
      description: 'Multi-layer convolutional networks process satellite imagery with 99.7% accuracy',
      icon: 'CpuChipIcon'
    },
    {
      id: 2,
      title: 'Real-Time Processing',
      description: 'Analyzes 2.5M+ data points daily from global satellite networks',
      icon: 'BoltIcon'
    },
    {
      id: 3,
      title: 'Predictive Analytics',
      description: 'Forecasts weather patterns up to 14 days with unprecedented precision',
      icon: 'ChartBarIcon'
    },
    {
      id: 4,
      title: 'Carbon Intelligence',
      description: 'Integrates carbon footprint calculations with weather predictions',
      icon: 'CloudIcon'
    }
  ];

  const architectureSpecs: TechnicalSpec[] = [
    { id: 1, label: 'Model Type', value: 'Transformer-based CNN' },
    { id: 2, label: 'Input Resolution', value: '10km spatial resolution' },
    { id: 3, label: 'Temporal Range', value: '14-day forecasts' },
    { id: 4, label: 'Update Frequency', value: 'Every 6 hours' }
  ];

  const trainingSpecs: TechnicalSpec[] = [
    { id: 1, label: 'Training Dataset', value: '20+ years satellite data' },
    { id: 2, label: 'Data Sources', value: 'NOAA, ESA, NASA satellites' },
    { id: 3, label: 'Training Duration', value: '18 months continuous' },
    { id: 4, label: 'Validation Method', value: 'Cross-validation with ground truth' }
  ];

  const accuracySpecs: TechnicalSpec[] = [
    { id: 1, label: 'Temperature Accuracy', value: '±0.5°C at 24h' },
    { id: 2, label: 'Precipitation Accuracy', value: '94% at 48h' },
    { id: 3, label: 'Wind Speed Accuracy', value: '±2 km/h at 72h' },
    { id: 4, label: 'Overall Performance', value: '99.7% prediction accuracy' }
  ];

  const getActiveSpecs = () => {
    switch (activeTab) {
      case 'architecture':
        return architectureSpecs;
      case 'training':
        return trainingSpecs;
      case 'accuracy':
        return accuracySpecs;
      default:
        return architectureSpecs;
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The RIIBAI AI Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proprietary artificial intelligence model combines cutting-edge deep learning with decades of climate data to deliver unparalleled weather prediction accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {modelFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-xl mb-4">
                <Icon name={feature.icon as any} size={28} className="text-secondary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="border-b border-border">
            <div className="flex flex-wrap">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`flex-1 min-w-[120px] px-6 py-4 font-semibold text-sm transition-colors duration-300 ${
                  activeTab === 'architecture' ?'bg-secondary text-secondary-foreground' :'text-muted-foreground hover:bg-muted'
                }`}
              >
                Architecture
              </button>
              <button
                onClick={() => setActiveTab('training')}
                className={`flex-1 min-w-[120px] px-6 py-4 font-semibold text-sm transition-colors duration-300 ${
                  activeTab === 'training' ?'bg-secondary text-secondary-foreground' :'text-muted-foreground hover:bg-muted'
                }`}
              >
                Training
              </button>
              <button
                onClick={() => setActiveTab('accuracy')}
                className={`flex-1 min-w-[120px] px-6 py-4 font-semibold text-sm transition-colors duration-300 ${
                  activeTab === 'accuracy' ?'bg-secondary text-secondary-foreground' :'text-muted-foreground hover:bg-muted'
                }`}
              >
                Accuracy
              </button>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              {getActiveSpecs().map((spec) => (
                <div key={spec.id} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon name="CheckCircleIcon" size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{spec.label}</div>
                    <div className="text-sm text-muted-foreground">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-surface rounded-xl">
              <div className="flex items-start gap-3">
                <Icon name="InformationCircleIcon" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How It Works</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our AI model processes satellite imagery through multiple neural network layers, identifying atmospheric patterns invisible to traditional forecasting methods. By analyzing historical data alongside real-time inputs, the system learns to predict weather changes with remarkable accuracy. The model continuously improves through feedback loops, incorporating new data to refine its predictions and adapt to evolving climate patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModelSection;