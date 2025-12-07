'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROIMetrics {
  costSavings: number;
  efficiencyGain: number;
  carbonReduction: number;
  roi: number;
}

const ROICalculator = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [employees, setEmployees] = useState(100);
  const [energyCost, setEnergyCost] = useState(50000);
  const [metrics, setMetrics] = useState<ROIMetrics>({
    costSavings: 0,
    efficiencyGain: 0,
    carbonReduction: 0,
    roi: 0
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      calculateROI();
    }
  }, [employees, energyCost, isHydrated]);

  const calculateROI = () => {
    const savingsRate = 0.18;
    const efficiencyRate = 0.22;
    const carbonRate = 0.15;
    
    const annualSavings = energyCost * savingsRate;
    const efficiency = efficiencyRate * 100;
    const carbonReduced = (energyCost / 1000) * carbonRate;
    const investmentCost = employees * 50;
    const roiValue = ((annualSavings - investmentCost) / investmentCost) * 100;

    setMetrics({
      costSavings: Math.round(annualSavings),
      efficiencyGain: Math.round(efficiency),
      carbonReduction: Math.round(carbonReduced),
      roi: Math.round(roiValue)
    });
  };

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
    <div className="bg-card border border-border rounded-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-conversion/10 rounded-lg flex items-center justify-center">
          <Icon name="CalculatorIcon" size={28} className="text-conversion" />
        </div>
        <div>
          <h3 className="text-2xl font-headline font-bold text-foreground">
            ROI Calculator
          </h3>
          <p className="text-sm text-muted-foreground">
            Estimate your potential savings with RIIBAI
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Number of Employees
          </label>
          <input
            type="number"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            min="1"
            max="10000"
            className="w-full px-4 py-2 bg-surface border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <div className="mt-2 text-xs text-muted-foreground">
            Range: 1 - 10,000 employees
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Annual Energy Cost ($)
          </label>
          <input
            type="number"
            value={energyCost}
            onChange={(e) => setEnergyCost(Number(e.target.value))}
            min="1000"
            max="10000000"
            step="1000"
            className="w-full px-4 py-2 bg-surface border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <div className="mt-2 text-xs text-muted-foreground">
            Range: $1,000 - $10,000,000
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="CurrencyDollarIcon" size={20} className="text-accent" />
            <span className="text-sm text-muted-foreground">Annual Savings</span>
          </div>
          <div className="text-3xl font-bold text-accent">
            ${metrics.costSavings.toLocaleString()}
          </div>
        </div>

        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="ArrowTrendingUpIcon" size={20} className="text-secondary" />
            <span className="text-sm text-muted-foreground">Efficiency Gain</span>
          </div>
          <div className="text-3xl font-bold text-secondary">
            {metrics.efficiencyGain}%
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="BeakerIcon" size={20} className="text-green-500" />
            <span className="text-sm text-muted-foreground">Carbon Reduced</span>
          </div>
          <div className="text-3xl font-bold text-green-500">
            {metrics.carbonReduction} tons
          </div>
        </div>

        <div className="bg-gradient-to-br from-conversion/10 to-conversion/5 border border-conversion/20 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="ChartBarIcon" size={20} className="text-conversion" />
            <span className="text-sm text-muted-foreground">ROI</span>
          </div>
          <div className="text-3xl font-bold text-conversion">
            {metrics.roi}%
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          <Icon name="InformationCircleIcon" size={16} className="inline mr-1" />
          Calculations based on industry averages and RIIBAI customer data. Actual results may vary based on implementation and usage patterns.
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;