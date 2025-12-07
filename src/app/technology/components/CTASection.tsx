import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-secondary/20 to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Climate Intelligence?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Join leading organizations using RIIBAI's AI-powered weather prediction engine to make carbon-smart decisions and drive sustainable outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/early-access"
              className="px-8 py-4 bg-accent text-accent-foreground font-cta font-semibold rounded-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              Get API Access
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <Link 
              href="/enterprise"
              className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-cta font-semibold rounded-lg hover:bg-primary-foreground/20 border border-primary-foreground/30 transition-all duration-300 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              Enterprise Solutions
              <Icon name="BuildingOfficeIcon" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ClockIcon" size={24} className="text-accent-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground mb-2">5 Minutes</div>
              <div className="text-sm text-primary-foreground/70">Integration Time</div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UserGroupIcon" size={24} className="text-secondary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground mb-2">1,000+</div>
              <div className="text-sm text-primary-foreground/70">Developers</div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="w-12 h-12 bg-conversion rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ChartBarIcon" size={24} className="text-conversion-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground mb-2">99.9%</div>
              <div className="text-sm text-primary-foreground/70">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;