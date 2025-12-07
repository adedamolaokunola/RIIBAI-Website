'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BenchmarkData {
  service: string;
  accuracy: number;
  speed: number;
}

const PerformanceBenchmarks = () => {
  const [activeMetric, setActiveMetric] = useState<'accuracy' | 'speed'>('accuracy');

  const benchmarkData: BenchmarkData[] = [
    { service: 'RIIBAI', accuracy: 99.2, speed: 95 },
    { service: 'Service A', accuracy: 87.5, speed: 78 },
    { service: 'Service B', accuracy: 82.3, speed: 85 },
    { service: 'Service C', accuracy: 79.8, speed: 72 },
    { service: 'Traditional', accuracy: 68.4, speed: 65 }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Performance Benchmarks
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Independent testing shows RIIBAI outperforms traditional weather services by significant margins
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 lg:p-8 border border-border shadow-lg">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveMetric('accuracy')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeMetric === 'accuracy' ?'bg-secondary text-secondary-foreground shadow-md' :'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Prediction Accuracy
            </button>
            <button
              onClick={() => setActiveMetric('speed')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeMetric === 'speed' ?'bg-secondary text-secondary-foreground shadow-md' :'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Processing Speed
            </button>
          </div>

          <div className="w-full h-80 lg:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={benchmarkData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="service" 
                  stroke="#64748B"
                  style={{ fontSize: '14px', fontWeight: 500 }}
                />
                <YAxis 
                  stroke="#64748B"
                  style={{ fontSize: '14px', fontWeight: 500 }}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    padding: '12px'
                  }}
                  formatter={(value: number) => `${value}%`}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="circle"
                />
                <Bar 
                  dataKey={activeMetric} 
                  fill={activeMetric === 'accuracy' ? '#1E88E5' : '#00E676'}
                  radius={[8, 8, 0, 0]}
                  name={activeMetric === 'accuracy' ? 'Accuracy Rate' : 'Processing Speed'}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-secondary mb-1">99.2%</div>
              <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
            </div>
            <div className="bg-surface rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-accent mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Processing Speed</div>
            </div>
            <div className="bg-surface rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-conversion mb-1">14 Days</div>
              <div className="text-sm text-muted-foreground">Forecast Range</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceBenchmarks;