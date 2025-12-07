'use client';

import Icon from '@/components/ui/AppIcon';

interface ComparisonItem {
  feature: string;
  riibai: string | boolean;
  traditional: string | boolean;
}

const ComparisonMatrix = () => {
  const comparisons: ComparisonItem[] = [
    {
      feature: 'Prediction Accuracy',
      riibai: '99.2%',
      traditional: '85-90%'
    },
    {
      feature: 'AI-Powered Analysis',
      riibai: true,
      traditional: false
    },
    {
      feature: 'Real-time Satellite Data',
      riibai: true,
      traditional: false
    },
    {
      feature: 'Carbon Analytics',
      riibai: true,
      traditional: false
    },
    {
      feature: 'Predictive Alerts',
      riibai: 'Advanced ML Models',
      traditional: 'Basic Thresholds'
    },
    {
      feature: 'API Integration',
      riibai: 'RESTful & GraphQL',
      traditional: 'Limited REST'
    },
    {
      feature: 'Update Frequency',
      riibai: 'Every 5 minutes',
      traditional: 'Hourly'
    },
    {
      feature: 'Historical Data',
      riibai: '50+ years',
      traditional: '10-20 years'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-secondary to-accent p-6">
        <h3 className="text-2xl font-headline font-bold text-white mb-2">
          RIIBAI vs Traditional Weather Services
        </h3>
        <p className="text-white/90">
          See how our AI-powered platform outperforms conventional solutions
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Feature
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-secondary">
                RIIBAI
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                Traditional Services
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((item, index) => (
              <tr
                key={index}
                className="border-b border-border hover:bg-surface/50 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-sm font-medium text-foreground">
                  {item.feature}
                </td>
                <td className="px-6 py-4 text-center">
                  {typeof item.riibai === 'boolean' ? (
                    item.riibai ? (
                      <Icon name="CheckCircleIcon" size={24} className="text-accent mx-auto" variant="solid" />
                    ) : (
                      <Icon name="XCircleIcon" size={24} className="text-error mx-auto" variant="solid" />
                    )
                  ) : (
                    <span className="text-sm font-semibold text-secondary">
                      {item.riibai}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  {typeof item.traditional === 'boolean' ? (
                    item.traditional ? (
                      <Icon name="CheckCircleIcon" size={24} className="text-accent mx-auto" variant="solid" />
                    ) : (
                      <Icon name="XCircleIcon" size={24} className="text-muted-foreground mx-auto" variant="solid" />
                    )
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {item.traditional}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-surface p-6 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Ready to experience next-generation climate intelligence?
          </p>
          <button className="px-6 py-2.5 bg-conversion text-conversion-foreground font-semibold rounded-md hover:bg-conversion/90 transition-all duration-300 whitespace-nowrap">
            Request Enterprise Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonMatrix;