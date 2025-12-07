'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PredictionData {
  date: string;
  temperature: number;
  precipitation: number;
  windSpeed: number;
  condition: string;
}

const InteractiveDemoSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [carbonOffset, setCarbonOffset] = useState(0);

  const mockPredictions: PredictionData[] = [
    { date: '2025-11-30', temperature: 22, precipitation: 10, windSpeed: 15, condition: 'Partly Cloudy' },
    { date: '2025-12-01', temperature: 24, precipitation: 5, windSpeed: 12, condition: 'Sunny' },
    { date: '2025-12-02', temperature: 20, precipitation: 30, windSpeed: 20, condition: 'Rainy' },
    { date: '2025-12-03', temperature: 23, precipitation: 15, windSpeed: 18, condition: 'Cloudy' },
    { date: '2025-12-04', temperature: 25, precipitation: 0, windSpeed: 10, condition: 'Clear' }
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const interval = setInterval(() => {
        setCarbonOffset((prev) => (prev < 2847 ? prev + 23 : 2847));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isHydrated]);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="h-12 bg-secondary/20 rounded-lg animate-pulse mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-96 bg-secondary/20 rounded-2xl animate-pulse"></div>
              <div className="h-96 bg-secondary/20 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 mb-4">
            <Icon name="BeakerIcon" size={20} className="text-accent" variant="solid" />
            <span className="text-sm font-medium text-primary-foreground">Interactive Demo</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Experience RIIBAI in Action
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our AI-powered weather prediction and carbon analytics tools with real-time data visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-primary/60 backdrop-blur-md rounded-2xl border border-secondary/30 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-xl font-bold text-primary-foreground flex items-center gap-2">
                <Icon name="CloudIcon" size={24} className="text-secondary" variant="solid" />
                5-Day Weather Forecast
              </h3>
              <div className="px-3 py-1 bg-success/20 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-success-foreground">AI Powered</span>
              </div>
            </div>

            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {mockPredictions.map((pred, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedDay === index
                      ? 'bg-secondary text-secondary-foreground shadow-lg scale-105'
                      : 'bg-secondary/20 text-primary-foreground/60 hover:bg-secondary/30'
                  }`}
                >
                  {new Date(pred.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="bg-secondary/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-foreground/60">Temperature</span>
                  <span className="text-2xl font-bold text-primary-foreground">
                    {mockPredictions[selectedDay].temperature}°C
                  </span>
                </div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(mockPredictions[selectedDay].temperature / 40) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-foreground/60">Precipitation</span>
                  <span className="text-2xl font-bold text-primary-foreground">
                    {mockPredictions[selectedDay].precipitation}%
                  </span>
                </div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div
                    className="bg-secondary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${mockPredictions[selectedDay].precipitation}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-foreground/60">Wind Speed</span>
                  <span className="text-2xl font-bold text-primary-foreground">
                    {mockPredictions[selectedDay].windSpeed} km/h
                  </span>
                </div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div
                    className="bg-conversion h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(mockPredictions[selectedDay].windSpeed / 50) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-4 border border-accent/30">
                <div className="flex items-center gap-2">
                  <Icon name="SunIcon" size={32} className="text-accent" variant="solid" />
                  <div>
                    <p className="text-sm text-primary-foreground/60">Condition</p>
                    <p className="text-lg font-bold text-primary-foreground">
                      {mockPredictions[selectedDay].condition}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/60 backdrop-blur-md rounded-2xl border border-secondary/30 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-xl font-bold text-primary-foreground flex items-center gap-2">
                <Icon name="ChartBarIcon" size={24} className="text-accent" variant="solid" />
                Carbon Analytics
              </h3>
              <div className="px-3 py-1 bg-accent/20 rounded-full flex items-center gap-2">
                <Icon name="ArrowTrendingDownIcon" size={16} className="text-accent" />
                <span className="text-xs font-medium text-accent-foreground">Optimizing</span>
              </div>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 mb-6 border border-accent/30">
              <p className="text-sm text-primary-foreground/60 mb-2">Total Carbon Offset</p>
              <p className="font-headline text-5xl font-bold text-primary-foreground mb-1">
                {carbonOffset.toLocaleString()}
              </p>
              <p className="text-sm text-primary-foreground/60">kg CO₂ reduced this month</p>
            </div>

            <div className="space-y-4">
              <div className="bg-secondary/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Icon name="BoltIcon" size={20} className="text-warning" variant="solid" />
                    <span className="text-sm font-medium text-primary-foreground">Energy Optimization</span>
                  </div>
                  <span className="text-sm font-bold text-primary-foreground">87%</span>
                </div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Icon name="TruckIcon" size={20} className="text-success" variant="solid" />
                    <span className="text-sm font-medium text-primary-foreground">Transport Efficiency</span>
                  </div>
                  <span className="text-sm font-bold text-primary-foreground">92%</span>
                </div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Icon name="BuildingOfficeIcon" size={20} className="text-secondary" variant="solid" />
                    <span className="text-sm font-medium text-primary-foreground">Facility Management</span>
                  </div>
                  <span className="text-sm font-bold text-primary-foreground">78%</span>
                </div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-success/10 rounded-xl border border-success/30">
              <div className="flex items-start gap-3">
                <Icon name="LightBulbIcon" size={24} className="text-success flex-shrink-0" variant="solid" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground mb-1">AI Recommendation</p>
                  <p className="text-sm text-primary-foreground/70">
                    Reduce energy consumption by 12% by adjusting HVAC schedules based on predicted weather patterns for the next 48 hours.
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

export default InteractiveDemoSection;