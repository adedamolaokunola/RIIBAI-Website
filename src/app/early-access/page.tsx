import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import EarlyAccessInteractive from './components/EarlyAccessInteractive';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Early Access - RIIBAI Climate Intelligence',
  description: 'Join RIIBAI\'s early access program to be among the first to experience AI-powered climate intelligence. Choose your access tier, preview exclusive content, and secure your spot for our March 2025 launch.',
};

export default function EarlyAccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary/20 py-20 sm:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <Icon name="SparklesIcon" size={20} className="text-accent mr-2" />
              <span className="text-sm font-medium text-accent">Limited Early Access Available</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-headline">
              Be First to Experience
              <span className="block text-accent mt-2">AI Climate Intelligence</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              Join RIIBAI's exclusive early access program and help shape the future of climate-smart decision making. Limited spots available for our March 2025 launch.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-conversion text-conversion-foreground font-semibold rounded-md hover:bg-conversion/90 hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                Register Now
                <Icon name="ArrowRightIcon" size={20} className="ml-2" />
              </button>
              <Link
                href="/features"
                className="px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <EarlyAccessInteractive />
        </div>

        <section className="bg-gradient-to-r from-secondary to-accent py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-headline">
              Ready to Transform Your Climate Strategy?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to be part of the climate intelligence revolution
            </p>
            <button
              onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-secondary font-semibold rounded-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center"
            >
              Secure Your Spot Now
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-primary border-t border-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-primary-foreground font-semibold mb-4 font-headline">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">Features</Link></li>
                <li><Link href="/technology" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">Technology</Link></li>
                <li><Link href="/enterprise" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">Enterprise</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-primary-foreground font-semibold mb-4 font-headline">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">About</Link></li>
                <li><Link href="/homepage" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">Homepage</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-primary-foreground font-semibold mb-4 font-headline">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">API Reference</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-primary-foreground font-semibold mb-4 font-headline">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  <Icon name="EnvelopeIcon" size={24} />
                </a>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  <Icon name="GlobeAltIcon" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary/20 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} RIIBAI Climate Intelligence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}