import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary/20 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-6 border border-secondary/30">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-foreground">Advanced AI Weather Intelligence</span>
          </div>
          
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            RIIBAI Weather Prediction Engine
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Harness the power of artificial intelligence and satellite data to transform climate intelligence into actionable insights. Our cutting-edge prediction engine delivers hyper-accurate weather forecasts with unprecedented precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#api-explorer" 
              className="px-8 py-4 bg-accent text-accent-foreground font-cta font-semibold rounded-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto text-center"
            >
              Explore API
            </a>
            <a 
              href="#technical-specs" 
              className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-cta font-semibold rounded-lg hover:bg-primary-foreground/20 border border-primary-foreground/30 transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;