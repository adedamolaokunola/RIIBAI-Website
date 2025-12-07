'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator = ({ className = '' }: ROICalculatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [employees, setEmployees] = useState(100);
  const [currentCosts, setCurrentCosts] = useState(50000);
  const [climateEvents, setClimateEvents] = useState(5);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className={`bg-gradient-to-br from-primary to-secondary/20 py-20 lg:py-32 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-2xl border border-accent/20">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-surface rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-surface rounded w-1/2 mx-auto"></div>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-6">
                  <div className="h-20 bg-surface rounded"></div>
                  <div className="h-20 bg-surface rounded"></div>
                  <div className="h-20 bg-surface rounded"></div>
                </div>
                <div className="space-y-6">
                  <div className="h-32 bg-surface rounded"></div>
                  <div className="h-32 bg-surface rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const calculateROI = () => {
    const annualSavings = currentCosts * 0.35;
    const riskReduction = climateEvents * 15000;
    const efficiencyGains = employees * 500;
    const totalBenefit = annualSavings + riskReduction + efficiencyGains;
    const riibaiCost = employees < 50 ? 4990 : employees < 200 ? 14990 : 29990;
    const netBenefit = totalBenefit - riibaiCost;
    const roi = ((netBenefit / riibaiCost) * 100).toFixed(0);

    return {
      annualSavings: Math.round(annualSavings),
      riskReduction: Math.round(riskReduction),
      efficiencyGains: Math.round(efficiencyGains),
      totalBenefit: Math.round(totalBenefit),
      riibaiCost,
      netBenefit: Math.round(netBenefit),
      roi
    };
  };

  const results = calculateROI();

  return (
    <section className={`bg-gradient-to-br from-primary to-secondary/20 py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent/20 rounded-full border border-accent/30 mb-6">
            <span className="text-accent font-semibold text-sm">ROI Calculator</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Calculate Your Potential Savings
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            See how RIIBAI can transform your climate intelligence investment into measurable business value.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-2xl border border-accent/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-card-foreground">Number of Employees</span>
                  <span className="text-lg font-bold text-accent">{employees}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>10</span>
                  <span>1000</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-card-foreground">Current Annual Climate Costs</span>
                  <span className="text-lg font-bold text-accent">${currentCosts.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={currentCosts}
                  onChange={(e) => setCurrentCosts(Number(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>$10K</span>
                  <span>$500K</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-card-foreground">Climate Events Per Year</span>
                  <span className="text-lg font-bold text-accent">{climateEvents}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={climateEvents}
                  onChange={(e) => setClimateEvents(Number(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>0</span>
                  <span>50</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-card-foreground">Projected Annual ROI</span>
                  <Icon name="TrendingUpIcon" size={24} className="text-accent" />
                </div>
                <div className="text-5xl font-bold text-accent mb-2">{results.roi}%</div>
                <div className="text-sm text-muted-foreground">Return on Investment</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="BanknotesIcon" size={20} className="text-success" />
                    <span className="text-sm font-medium text-card-foreground">Operational Savings</span>
                  </div>
                  <span className="text-lg font-bold text-success">${results.annualSavings.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="ShieldCheckIcon" size={20} className="text-secondary" />
                    <span className="text-sm font-medium text-card-foreground">Risk Mitigation</span>
                  </div>
                  <span className="text-lg font-bold text-secondary">${results.riskReduction.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="BoltIcon" size={20} className="text-warning" />
                    <span className="text-sm font-medium text-card-foreground">Efficiency Gains</span>
                  </div>
                  <span className="text-lg font-bold text-warning">${results.efficiencyGains.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-card-foreground">Total Annual Benefit</span>
                  <span className="text-2xl font-bold text-card-foreground">${results.totalBenefit.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">RIIBAI Investment</span>
                  <span className="text-lg text-muted-foreground">-${results.riibaiCost.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-base font-bold text-card-foreground">Net Annual Benefit</span>
                  <span className="text-2xl font-bold text-accent">${results.netBenefit.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-conversion text-conversion-foreground font-cta font-semibold rounded-lg hover:bg-conversion/90 hover:scale-105 transition-all duration-300 shadow-lg">
                Get Detailed ROI Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;