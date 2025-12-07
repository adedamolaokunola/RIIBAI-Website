import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-primary to-secondary/20 text-primary-foreground overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
              <span className="text-accent font-semibold text-sm">Enterprise Climate Intelligence</span>
            </div>
            
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Climate Data Into
              <span className="block text-accent mt-2">Strategic Advantage</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Empower your organization with AI-powered weather intelligence and carbon analytics. Make data-driven sustainability decisions that reduce risk and drive measurable climate impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-conversion text-conversion-foreground font-cta font-semibold rounded-md hover:bg-conversion/90 hover:scale-105 transition-all duration-300 shadow-lg">
                Schedule Enterprise Demo
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300">
                View Case Studies
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99.2%</div>
                <div className="text-sm text-primary-foreground/70">Prediction Accuracy</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/70">Enterprise Clients</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-primary-foreground/70">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent/20">
              <AppImage
                src="https://images.unsplash.com/photo-1642775196125-38a9eb496568"
                alt="Modern business analytics dashboard displaying climate data visualizations with graphs and real-time weather monitoring on multiple screens"
                className="w-full h-auto" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-card-foreground">Live Climate Monitoring</span>
              </div>
              <div className="text-2xl font-bold text-card-foreground">Real-time Insights</div>
              <div className="text-sm text-muted-foreground mt-1">Updated every 15 minutes</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;