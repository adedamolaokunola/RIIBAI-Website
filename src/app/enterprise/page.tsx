import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import SolutionsGrid from './components/SolutionsGrid';
import CaseStudies from './components/CaseStudies';
import PricingTiers from './components/PricingTiers';
import ROICalculator from './components/ROICalculator';
import TrustCenter from './components/TrustCenter';
import ConsultationBooking from './components/ConsultationBooking';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Enterprise Solutions - RIIBAI Climate Intelligence',
  description: 'Transform climate data into strategic advantage with RIIBAI enterprise solutions. AI-powered weather intelligence, carbon analytics, and risk management for climate-conscious organizations.',
};

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <HeroSection />
        <SolutionsGrid />
        <CaseStudies />
        <PricingTiers />
        <ROICalculator />
        <TrustCenter />
        <ConsultationBooking />
        <CTASection />
      </div>
    </main>
  );
}