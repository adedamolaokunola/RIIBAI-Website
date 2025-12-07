interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-primary to-secondary/20 py-20 lg:py-32 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Transforming Climate Data Into
            <span className="block text-accent mt-2">Actionable Intelligence</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            RIIBAI combines cutting-edge artificial intelligence with satellite data analytics to deliver hyper-accurate weather predictions and carbon-smart decision making for a sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;