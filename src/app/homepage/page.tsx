import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import FeaturesShowcase from './components/FeaturesShowcase';
import TrustIndicators from './components/TrustIndicators';
import InteractiveDemoSection from './components/InteractiveDemoSection';
import FounderSection from './components/FounderSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'RIIBAI - AI-Powered Climate Intelligence Platform',
  description: 'Transform climate data into carbon-smart decisions with RIIBAI\'s AI-powered weather prediction and satellite analytics. Join the climate intelligence revolution today.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesShowcase />
      <TrustIndicators />
      <InteractiveDemoSection />
      <FounderSection />
      <CTASection />
      <Footer />
    </main>
  );
}