import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import FounderSection from './components/FounderSection';
import AIModelSection from './components/AIModelSection';
import PartnershipsSection from './components/PartnershipsSection';
import ImpactSection from './components/ImpactSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'About - RIIBAI Climate Intelligence',
  description: 'Learn about RIIBAI\'s mission to democratize climate intelligence through AI-powered weather prediction and carbon analytics. Meet our founder Adedamola Okunola and discover our research partnerships.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <HeroSection />
        <MissionSection />
        <FounderSection />
        <AIModelSection />
        <PartnershipsSection />
        <ImpactSection />
        <TeamSection />
        <Footer />
      </div>
    </main>
  );
}