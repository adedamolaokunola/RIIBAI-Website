'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  location: string;
}

const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentWeather, setCurrentWeather] = useState<WeatherData>({
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    location: 'Global Average'
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="relative min-h-screen bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-secondary via-primary to-accent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-16 bg-secondary/20 rounded-lg animate-pulse mb-6"></div>
            <div className="h-32 bg-secondary/20 rounded-lg animate-pulse mb-8"></div>
            <div className="h-12 bg-secondary/20 rounded-lg animate-pulse max-w-md mx-auto"></div>
          </div>
        </div>
      </section>);

  }

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <AppImage
          src="https://images.unsplash.com/photo-1614728672820-e88260ce6d0d"
          alt="Satellite view of Earth showing swirling white clouds over blue oceans and green continents with atmospheric glow"
          fill
          className="object-cover"
          priority />

      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 mb-6">
            <Icon name="SparklesIcon" size={20} className="text-accent" variant="solid" />
            <span className="text-sm font-medium text-primary-foreground">AI-Powered Climate Intelligence</span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Transform Climate Data Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Carbon-Smart Decisions
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Harness the power of AI-driven weather prediction and satellite analytics to make informed decisions for a sustainable future. Predict, prepare, and protect with RIIBAI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/early-access"
              className="w-full sm:w-auto px-8 py-4 bg-conversion text-conversion-foreground font-cta font-semibold rounded-lg hover:bg-conversion/90 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">

              Join Early Access
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto px-8 py-4 bg-secondary/20 backdrop-blur-sm text-primary-foreground font-semibold rounded-lg hover:bg-secondary/30 transition-all duration-300 border border-secondary/30 flex items-center justify-center gap-2">

              Explore Features
              <Icon name="ChartBarIcon" size={20} />
            </Link>
          </div>

          <div className="bg-primary/60 backdrop-blur-md rounded-2xl border border-secondary/30 p-6 max-w-2xl mx-auto shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon name="MapPinIcon" size={20} className="text-accent" variant="solid" />
                <span className="text-sm font-medium text-primary-foreground">{currentWeather.location}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-success/20 rounded-full">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-success-foreground">Live Data</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <Icon name="SunIcon" size={32} className="text-accent mx-auto mb-2" variant="solid" />
                <p className="text-3xl font-bold text-primary-foreground">{currentWeather.temperature}°C</p>
                <p className="text-sm text-primary-foreground/60">Temperature</p>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <Icon name="CloudIcon" size={32} className="text-secondary mx-auto mb-2" variant="solid" />
                <p className="text-lg font-semibold text-primary-foreground">{currentWeather.condition}</p>
                <p className="text-sm text-primary-foreground/60">Condition</p>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <Icon name="BeakerIcon" size={32} className="text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold text-primary-foreground">{currentWeather.humidity}%</p>
                <p className="text-sm text-primary-foreground/60">Humidity</p>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <Icon name="ArrowTrendingUpIcon" size={32} className="text-secondary mx-auto mb-2" />
                <p className="text-3xl font-bold text-primary-foreground">{currentWeather.windSpeed}</p>
                <p className="text-sm text-primary-foreground/60">Wind km/h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>);

};

export default HeroSection;