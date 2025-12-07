import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import FeatureCard from './components/FeatureCard';
import InteractiveDemo from './components/InteractiveDemo';
import ComparisonMatrix from './components/ComparisonMatrix';
import UseCaseCard from './components/UseCaseCard';
import TechnicalSpecs from './components/TechnicalSpecs';
import ROICalculator from './components/ROICalculator';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Features - RIIBAI Climate Intelligence',
  description: 'Explore RIIBAI\'s comprehensive climate intelligence capabilities including hyper-accurate weather predictions, carbon analytics, risk scoring, and enterprise solutions powered by AI and satellite data.'
};

export default function FeaturesPage() {
  const coreFeatures = [
  {
    icon: 'BoltIcon',
    title: 'Hyper-Accurate Predictions',
    description: 'Advanced AI models trained on 50+ years of historical data deliver 99.2% accuracy in weather forecasting, outperforming traditional services by 14%.',
    metrics: [
    { label: 'Accuracy Rate', value: '99.2%' },
    { label: 'Update Frequency', value: '5 min' }],

    color: 'blue' as const
  },
  {
    icon: 'ChartBarIcon',
    title: 'Carbon Analytics',
    description: 'Real-time carbon impact tracking with AI-powered insights helps organizations reduce emissions by up to 18% through data-driven decision making.',
    metrics: [
    { label: 'Avg. Reduction', value: '18%' },
    { label: 'Tracking Points', value: '1000+' }],

    color: 'green' as const
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Advanced Risk Scoring',
    description: 'Multi-layer threat detection and dynamic risk calculation provide predictive warnings for climate events, enabling proactive mitigation strategies.',
    metrics: [
    { label: 'Alert Accuracy', value: '96%' },
    { label: 'Lead Time', value: '72 hrs' }],

    color: 'orange' as const
  },
  {
    icon: 'BellAlertIcon',
    title: 'Predictive Alerts',
    description: 'Machine learning models analyze patterns to deliver intelligent notifications about upcoming weather events and carbon impact opportunities.',
    metrics: [
    { label: 'Response Time', value: '<100ms' },
    { label: 'Alert Types', value: '25+' }],

    color: 'purple' as const
  }];


  const useCases = [
  {
    title: 'Enterprise Operations',
    description: 'Optimize facility management, supply chain logistics, and energy consumption with predictive climate intelligence tailored for large-scale operations.',
    image: "https://images.unsplash.com/photo-1721240608299-cdf5ee26c235",
    alt: 'Modern glass office building with blue sky reflecting sustainable architecture',
    benefits: [
    'Reduce operational costs by 15-20%',
    'Improve supply chain efficiency',
    'Minimize weather-related disruptions'],

    icon: 'BuildingOfficeIcon'
  },
  {
    title: 'Renewable Energy',
    description: 'Maximize solar and wind energy production with precise weather forecasting and carbon offset tracking for sustainable power generation.',
    image: "https://images.unsplash.com/photo-1715632943973-61b6bb8df7cc",
    alt: 'Solar panels array in field with wind turbines under clear blue sky',
    benefits: [
    'Increase energy output by 22%',
    'Optimize maintenance scheduling',
    'Track carbon offset achievements'],

    icon: 'BoltIcon'
  },
  {
    title: 'Agriculture & Farming',
    description: 'Enhance crop yields and resource management with hyper-local weather predictions and soil condition monitoring powered by satellite data.',
    image: "https://images.unsplash.com/photo-1720396966080-f5bfeb8978f0",
    alt: 'Green agricultural fields with irrigation system under partly cloudy sky',
    benefits: [
    'Improve crop yields by 18%',
    'Reduce water usage by 25%',
    'Prevent weather-related crop loss'],

    icon: 'BeakerIcon'
  },
  {
    title: 'Smart Cities',
    description: 'Enable sustainable urban planning with comprehensive climate data analytics, air quality monitoring, and infrastructure risk assessment.',
    image: "https://images.unsplash.com/photo-1683013070436-9a31885c696d",
    alt: 'Futuristic city skyline at dusk with illuminated smart buildings and infrastructure',
    benefits: [
    'Enhance public safety systems',
    'Optimize traffic and transit',
    'Reduce urban carbon footprint'],

    icon: 'MapIcon'
  }];


  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-secondary">Comprehensive Climate Intelligence</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-headline font-bold text-foreground mb-6">
                Features That Power
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                  Sustainable Futures
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how RIIBAI's AI-powered platform transforms satellite data into actionable climate intelligence, enabling organizations to make carbon-smart decisions with unprecedented accuracy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {coreFeatures.map((feature, index) =>
              <FeatureCard key={index} {...feature} />
              )}
            </div>

            <div className="mb-16">
              <InteractiveDemo />
            </div>

            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
                  Industry Applications
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See how leading organizations across industries leverage RIIBAI for climate-conscious operations
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) =>
                <UseCaseCard key={index} {...useCase} />
                )}
              </div>
            </div>

            <div className="mb-16">
              <TechnicalSpecs />
            </div>

            <div className="mb-16">
              <ComparisonMatrix />
            </div>

            <div className="mb-16">
              <ROICalculator />
            </div>

            <CTASection />
          </div>
        </section>
      </main>
    </>);

}