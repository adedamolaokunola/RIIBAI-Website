import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CaseStudy {
  id: number;
  company: string;
  industry: string;
  logo: string;
  logoAlt: string;
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: string;
  author: string;
  position: string;
}

interface CaseStudiesProps {
  className?: string;
}

const CaseStudies = ({ className = '' }: CaseStudiesProps) => {
  const caseStudies: CaseStudy[] = [
  {
    id: 1,
    company: 'GreenTech Industries',
    industry: 'Renewable Energy',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_154dfeb5e-1764435725778.png",
    logoAlt: 'GreenTech Industries logo with green leaf symbol on white background',
    image: "https://images.unsplash.com/photo-1685905735715-6e16669143fd",
    imageAlt: 'Modern wind turbines in green field under blue sky with white clouds at sunset',
    challenge: 'Needed accurate weather predictions to optimize renewable energy production and reduce operational costs.',
    solution: 'Implemented RIIBAI Weather Intelligence API with custom integration for real-time energy forecasting.',
    results: [
    { metric: '35%', value: 'Cost Reduction', description: 'In operational expenses' },
    { metric: '99.1%', value: 'Prediction Accuracy', description: 'For 72-hour forecasts' },
    { metric: '2.5M', value: 'Carbon Offset', description: 'Tons annually' }],

    testimonial: 'RIIBAI transformed our energy forecasting capabilities. The accuracy of their predictions allowed us to optimize our operations and significantly reduce costs while maximizing our renewable energy output.',
    author: 'Sarah Chen',
    position: 'Chief Operations Officer'
  },
  {
    id: 2,
    company: 'AgriSmart Solutions',
    industry: 'Agricultural Technology',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6d6f3cf-1764435725060.png",
    logoAlt: 'AgriSmart Solutions logo with wheat symbol and modern typography',
    image: "https://images.unsplash.com/photo-1713952160156-bb59cac789a9",
    imageAlt: 'Precision agriculture drone flying over green crop field with irrigation system visible',
    challenge: 'Required precise climate data to help farmers make informed decisions about planting and harvesting schedules.',
    solution: 'Deployed RIIBAI Climate Risk Management platform with custom alerts for agricultural operations.',
    results: [
    { metric: '42%', value: 'Yield Increase', description: 'Average crop yield improvement' },
    { metric: '28%', value: 'Water Savings', description: 'Through optimized irrigation' },
    { metric: '15K+', value: 'Farmers Served', description: 'Across 12 countries' }],

    testimonial: 'The precision of RIIBAI climate intelligence has revolutionized how our farmers plan their operations. We have seen remarkable improvements in crop yields and resource efficiency.',
    author: 'Michael Rodriguez',
    position: 'Director of Technology'
  }];


  return (
    <section className={`bg-surface py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-success/10 rounded-full border border-success/20 mb-6">
            <span className="text-success font-semibold text-sm">Success Stories</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Impact, Measurable Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how leading organizations leverage RIIBAI to drive sustainability and operational excellence.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) =>
          <div
            key={study.id}
            className={`bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-shadow duration-300 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
            }>

              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <AppImage
                  src={study.image}
                  alt={study.imageAlt}
                  className="w-full h-full object-cover" />

                  <div className="absolute top-6 left-6 bg-card px-4 py-2 rounded-lg shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-surface">
                        <AppImage
                        src={study.logo}
                        alt={study.logoAlt}
                        className="w-full h-full object-cover" />

                      </div>
                      <div>
                        <div className="font-semibold text-card-foreground text-sm">{study.company}</div>
                        <div className="text-xs text-muted-foreground">{study.industry}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-headline text-2xl font-bold text-card-foreground mb-3">
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-headline text-2xl font-bold text-card-foreground mb-3">
                        The Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-6">
                      {study.results.map((result, idx) =>
                    <div key={idx} className="text-center">
                          <div className="text-3xl font-bold text-accent mb-1">{result.metric}</div>
                          <div className="text-sm font-semibold text-card-foreground mb-1">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.description}</div>
                        </div>
                    )}
                    </div>

                    <div className="bg-surface/50 rounded-lg p-6 border-l-4 border-accent">
                      <div className="flex gap-3 mb-4">
                        <Icon name="ChatBubbleLeftIcon" size={24} className="text-accent flex-shrink-0" />
                        <p className="text-card-foreground italic leading-relaxed">
                          "{study.testimonial}"
                        </p>
                      </div>
                      <div className="ml-9">
                        <div className="font-semibold text-card-foreground">{study.author}</div>
                        <div className="text-sm text-muted-foreground">{study.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default CaseStudies;