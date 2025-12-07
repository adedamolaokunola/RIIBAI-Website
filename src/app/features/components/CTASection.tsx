import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-secondary via-accent to-secondary rounded-lg p-8 lg:p-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-4">
          Ready to Transform Your Climate Intelligence?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Join leading organizations using RIIBAI to make data-driven, carbon-smart decisions. Start your journey to sustainable operations today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/early-access"
            className="px-8 py-4 bg-white text-secondary font-semibold rounded-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <Icon name="RocketLaunchIcon" size={20} />
            Join Early Access
          </Link>

          <Link
            href="/enterprise"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2"
          >
            <Icon name="BuildingOfficeIcon" size={20} />
            Request Enterprise Demo
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm">No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm">14-Day Free Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;