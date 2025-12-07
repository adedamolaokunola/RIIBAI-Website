import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import TechOverviewSection from './components/TechOverviewSection';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import PerformanceBenchmarks from './components/PerformanceBenchmarks';
import APIExplorer from './components/APIExplorer';
import TechnicalSpecs from './components/TechnicalSpecs';
import DeveloperOnboarding from './components/DeveloperOnboarding';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Technology - RIIBAI Climate Intelligence',
  description: 'Explore RIIBAI\'s AI-powered weather prediction engine with deep-dive technical specifications, API documentation, integration examples, and developer resources for climate intelligence applications.',
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TechOverviewSection />
      <ArchitectureDiagram />
      <PerformanceBenchmarks />
      <APIExplorer />
      <TechnicalSpecs />
      <DeveloperOnboarding />
      <CTASection />
    </main>
  );
}