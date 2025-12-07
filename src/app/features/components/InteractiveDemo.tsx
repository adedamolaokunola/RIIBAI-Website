'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface DemoData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  carbonImpact: number;
}

const InteractiveDemo = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'weather' | 'carbon'>('weather');
  const [location, setLocation] = useState('San Francisco, CA');
  const [isSimulating, setIsSimulating] = useState(false);
  const [demoData, setDemoData] = useState<DemoData>({
    temperature: 72,
    humidity: 65,
    windSpeed: 12,
    precipitation: 15,
    carbonImpact: 245
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

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

  const locations = [
    'San Francisco, CA',
    'New York, NY',
    'London, UK',
    'Tokyo, Japan',
    'Sydney, Australia'
  ];

  const simulateData = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setDemoData({
        temperature: Math.floor(Math.random() * 40) + 50,
        humidity: Math.floor(Math.random() * 50) + 40,
        windSpeed: Math.floor(Math.random() * 20) + 5,
        precipitation: Math.floor(Math.random() * 30) + 10,
        carbonImpact: Math.floor(Math.random() * 300) + 150
      });
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        <h3 className="text-2xl font-headline font-bold text-foreground">
          Live Intelligence Demo
        </h3>
        
        <div className="flex gap-2">
          <button
            onClick={() => setActiveDemo('weather')}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
              activeDemo === 'weather' ?'bg-secondary text-secondary-foreground' :'bg-surface text-muted-foreground hover:bg-surface/80'
            }`}
          >
            Weather Prediction
          </button>
          <button
            onClick={() => setActiveDemo('carbon')}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
              activeDemo === 'carbon' ?'bg-accent text-accent-foreground' :'bg-surface text-muted-foreground hover:bg-surface/80'
            }`}
          >
            Carbon Analytics
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">
            Select Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 bg-surface border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-2 flex items-end">
          <button
            onClick={simulateData}
            disabled={isSimulating}
            className="w-full lg:w-auto px-6 py-2 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isSimulating ? (
              <>
                <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                Analyzing Data...
              </>
            ) : (
              <>
                <Icon name="BoltIcon" size={20} />
                Run AI Prediction
              </>
            )}
          </button>
        </div>
      </div>

      {activeDemo === 'weather' ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="SunIcon" size={20} className="text-secondary" />
              <span className="text-sm text-muted-foreground">Temperature</span>
            </div>
            <div className="text-3xl font-bold text-secondary">{demoData.temperature}°F</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="CloudIcon" size={20} className="text-blue-500" />
              <span className="text-sm text-muted-foreground">Humidity</span>
            </div>
            <div className="text-3xl font-bold text-blue-500">{demoData.humidity}%</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="ArrowTrendingUpIcon" size={20} className="text-cyan-500" />
              <span className="text-sm text-muted-foreground">Wind Speed</span>
            </div>
            <div className="text-3xl font-bold text-cyan-500">{demoData.windSpeed} mph</div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="BeakerIcon" size={20} className="text-indigo-500" />
              <span className="text-sm text-muted-foreground">Precipitation</span>
            </div>
            <div className="text-3xl font-bold text-indigo-500">{demoData.precipitation}%</div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon name="ChartBarIcon" size={24} className="text-accent" />
                <span className="text-lg font-semibold text-foreground">Carbon Impact Score</span>
              </div>
              <div className="text-4xl font-bold text-accent">{demoData.carbonImpact}</div>
            </div>
            <div className="w-full bg-surface rounded-full h-3">
              <div
                className="bg-accent h-3 rounded-full transition-all duration-500"
                style={{ width: `${(demoData.carbonImpact / 500) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Based on current weather patterns and energy consumption data
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-surface rounded-lg p-4 border border-border">
              <div className="text-sm text-muted-foreground mb-1">CO₂ Reduction</div>
              <div className="text-2xl font-bold text-accent">-12.5%</div>
            </div>
            <div className="bg-surface rounded-lg p-4 border border-border">
              <div className="text-sm text-muted-foreground mb-1">Energy Efficiency</div>
              <div className="text-2xl font-bold text-secondary">+18.3%</div>
            </div>
            <div className="bg-surface rounded-lg p-4 border border-border">
              <div className="text-sm text-muted-foreground mb-1">Risk Score</div>
              <div className="text-2xl font-bold text-conversion">Low</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveDemo;