'use client';

import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import AccessTierCard from './AccessTierCard';
import TestimonialCard from './TestimonialCard';
import PreviewContentCard from './PreviewContentCard';
import EarlyAccessForm from './EarlyAccessForm';
import ReferralProgram from './ReferralProgram';

interface AccessTier {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  icon: string;
  popular?: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
}

interface PreviewContent {
  id: number;
  title: string;
  description: string;
  type: string;
  icon: string;
  duration?: string;
}

const EarlyAccessInteractive = () => {
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [showForm, setShowForm] = useState(false);

  const launchDate = new Date('2025-03-15T00:00:00');

  const accessTiers: AccessTier[] = [
  {
    id: 'subscriber',
    name: 'Basic Subscriber',
    description: 'Stay informed with regular updates',
    benefits: [
    'Monthly climate intelligence newsletter',
    'Launch day notification',
    'Early bird pricing access',
    'Community forum access'],

    icon: 'EnvelopeIcon'
  },
  {
    id: 'beta',
    name: 'Beta Tester',
    description: 'Test features before launch',
    benefits: [
    'All Basic Subscriber benefits',
    'Beta platform access',
    'Direct feedback channel',
    'Feature voting rights',
    'Beta tester badge'],

    icon: 'BeakerIcon',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Preview',
    description: 'Custom solutions for organizations',
    benefits: [
    'All Beta Tester benefits',
    'Dedicated account manager',
    'Custom integration support',
    'Priority API access',
    'White-glove onboarding'],

    icon: 'BuildingOfficeIcon'
  },
  {
    id: 'investor',
    name: 'Investor Access',
    description: 'Partnership opportunities',
    benefits: [
    'All Enterprise benefits',
    'Quarterly business reviews',
    'Founder direct access',
    'Investment deck access',
    'Strategic partnership discussions'],

    icon: 'ChartBarIcon'
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Chief Sustainability Officer',
    company: 'GreenTech Industries',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10a19f109-1763296358145.png",
    alt: 'Professional Asian woman with glasses and black blazer smiling in modern office',
    quote: 'RIIBAI\'s AI predictions are transforming how we approach carbon reduction. The accuracy is unprecedented.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Lead Data Scientist',
    company: 'Climate Analytics Corp',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_154db72b0-1763298646228.png",
    alt: 'Hispanic man with short dark hair in navy suit smiling confidently',
    quote: 'The API integration was seamless. We\'re now making data-driven climate decisions in real-time.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Thompson',
    role: 'Environmental Consultant',
    company: 'EcoStrategy Partners',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_179d5745f-1763294338633.png",
    alt: 'Young woman with blonde hair in professional attire in bright office setting',
    quote: 'RIIBAI bridges the gap between complex climate data and actionable business intelligence perfectly.',
    rating: 5
  },
  {
    id: 4,
    name: 'Dr. James Okonkwo',
    role: 'Climate Research Director',
    company: 'African Climate Institute',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc3835d3-1763294571813.png",
    alt: 'African man with short hair in light blue shirt smiling warmly',
    quote: 'The satellite data integration provides insights we\'ve never had access to before. Game-changing technology.',
    rating: 5
  }];


  const previewContent: PreviewContent[] = [
  {
    id: 1,
    title: 'Weather Prediction Engine Demo',
    description: 'See how RIIBAI\'s AI processes satellite data to generate hyper-accurate forecasts',
    type: 'Video Demo',
    icon: 'PlayCircleIcon',
    duration: '5:30'
  },
  {
    id: 2,
    title: 'API Documentation Preview',
    description: 'Explore our comprehensive API endpoints and integration examples',
    type: 'Technical Docs',
    icon: 'DocumentTextIcon',
    duration: '10 min read'
  },
  {
    id: 3,
    title: 'Founder Interview: Vision & Mission',
    description: 'Adedamola Okunola shares the inspiration behind RIIBAI and future roadmap',
    type: 'Interview',
    icon: 'UserCircleIcon',
    duration: '15:00'
  },
  {
    id: 4,
    title: 'Carbon Analytics Dashboard',
    description: 'Interactive walkthrough of our carbon footprint tracking and reduction tools',
    type: 'Interactive Demo',
    icon: 'ChartBarIcon',
    duration: '8 min'
  },
  {
    id: 5,
    title: 'Satellite Imagery Explorer',
    description: 'Navigate real-time satellite data with our intuitive visualization tools',
    type: 'Interactive Tool',
    icon: 'GlobeAltIcon',
    duration: 'Interactive'
  },
  {
    id: 6,
    title: 'Climate Intelligence Report Sample',
    description: 'Download a sample of our monthly climate analysis and predictions',
    type: 'PDF Report',
    icon: 'ArrowDownTrayIcon',
    duration: '20 pages'
  }];


  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handlePreviewView = (contentId: number) => {
    console.log('Viewing preview content:', contentId);
  };

  return (
    <div className="space-y-16">
      <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-headline">
          Launch Countdown
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          RIIBAI goes live in March 2025. Join early access to be among the first to experience AI-powered climate intelligence.
        </p>
        <CountdownTimer targetDate={launchDate} />
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-headline">
            Choose Your Access Level
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the tier that best fits your needs. All tiers include exclusive benefits and early access privileges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessTiers.map((tier) =>
          <AccessTierCard
            key={tier.id}
            tier={tier}
            onSelect={handleTierSelect} />

          )}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-headline">
            What Early Adopters Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of climate professionals already using RIIBAI in beta
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) =>
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          )}
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-headline">
            Exclusive Preview Content
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get a sneak peek at RIIBAI's capabilities with our exclusive preview materials
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewContent.map((content) =>
          <PreviewContentCard
            key={content.id}
            content={content}
            onView={handlePreviewView} />

          )}
        </div>
      </section>

      <section id="registration-form">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-headline">
            Join Early Access
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete your registration to secure your spot in RIIBAI's launch program
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <EarlyAccessForm selectedTier={selectedTier} />
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto">
          <ReferralProgram />
        </div>
      </section>
    </div>);

};

export default EarlyAccessInteractive;