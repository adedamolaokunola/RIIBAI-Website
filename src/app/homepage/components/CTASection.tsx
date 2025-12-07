import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-conversion rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
            <Icon name="RocketLaunchIcon" size={20} className="text-accent" variant="solid" />
            <span className="text-sm font-medium text-primary-foreground">Limited Early Access</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Join the Climate Intelligence Revolution
          </h2>

          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Be among the first to experience AI-powered weather prediction and carbon analytics. Early access members receive exclusive benefits and priority support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/early-access"
              className="w-full sm:w-auto px-10 py-5 bg-conversion text-conversion-foreground font-cta font-bold text-lg rounded-lg hover:bg-conversion/90 hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
            >
              <Icon name="SparklesIcon" size={24} variant="solid" />
              Get Early Access
              <Icon name="ArrowRightIcon" size={24} />
            </Link>
            <Link
              href="/enterprise"
              className="w-full sm:w-auto px-10 py-5 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 border-2 border-primary-foreground/30 flex items-center justify-center gap-3"
            >
              <Icon name="BuildingOffice2Icon" size={24} />
              Enterprise Solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Icon name="BoltIcon" size={40} className="text-accent mx-auto mb-3" variant="solid" />
              <p className="font-semibold text-primary-foreground mb-2">Instant Access</p>
              <p className="text-sm text-primary-foreground/70">Start using RIIBAI immediately after registration</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Icon name="GiftIcon" size={40} className="text-accent mx-auto mb-3" variant="solid" />
              <p className="font-semibold text-primary-foreground mb-2">Exclusive Benefits</p>
              <p className="text-sm text-primary-foreground/70">Premium features at early adopter pricing</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Icon name="ChatBubbleLeftRightIcon" size={40} className="text-accent mx-auto mb-3" variant="solid" />
              <p className="font-semibold text-primary-foreground mb-2">Priority Support</p>
              <p className="text-sm text-primary-foreground/70">Direct access to our climate science team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;