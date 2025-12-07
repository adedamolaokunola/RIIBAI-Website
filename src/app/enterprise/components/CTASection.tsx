import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`bg-gradient-to-br from-primary via-secondary/30 to-primary py-20 lg:py-32 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Climate Intelligence?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-12 leading-relaxed">
            Join hundreds of forward-thinking organizations using RIIBAI to make data-driven sustainability decisions. Start your journey to climate-smart operations today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="px-10 py-5 bg-conversion text-conversion-foreground font-cta font-bold text-lg rounded-lg hover:bg-conversion/90 hover:scale-110 transition-all duration-300 shadow-2xl flex items-center gap-3">
              Schedule Enterprise Demo
              <Icon name="CalendarIcon" size={24} />
            </button>
            <Link
              href="/early-access"
              className="px-10 py-5 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300 flex items-center gap-3"
            >
              Join Early Access
              <Icon name="ArrowRightIcon" size={24} />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} className="text-accent" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} className="text-accent" />
              <span className="text-sm">30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={20} className="text-accent" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;