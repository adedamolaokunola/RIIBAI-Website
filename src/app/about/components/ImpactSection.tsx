import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ImpactStory {
  id: number;
  title: string;
  organization: string;
  image: string;
  alt: string;
  impact: string;
  metric: string;
  description: string;
  category: string;
}

interface ImpactSectionProps {
  className?: string;
}

const ImpactSection = ({ className = '' }: ImpactSectionProps) => {
  const impactStories: ImpactStory[] = [
  {
    id: 1,
    title: 'Renewable Energy Optimization',
    organization: 'SolarTech Industries',
    image: "https://images.unsplash.com/photo-1440940627368-bd68a386bb73",
    alt: 'Large solar panel farm with blue sky and white clouds reflecting on photovoltaic cells',
    impact: '35% Efficiency Increase',
    metric: '12,000 tons CO₂ saved annually',
    description: 'By integrating RIIBAI weather predictions, SolarTech optimized their solar panel positioning and energy storage scheduling, resulting in significant efficiency gains and carbon reduction.',
    category: 'Energy'
  },
  {
    id: 2,
    title: 'Agricultural Planning',
    organization: 'GreenFields Cooperative',
    image: "https://images.unsplash.com/photo-1593288653045-7ed55242d70a",
    alt: 'Lush green agricultural field with irrigation system and farmer monitoring crops',
    impact: '28% Water Conservation',
    metric: '5 million gallons saved',
    description: 'Precision weather forecasting enabled GreenFields to optimize irrigation schedules, reducing water waste while maintaining crop yields and improving sustainability practices.',
    category: 'Agriculture'
  },
  {
    id: 3,
    title: 'Supply Chain Resilience',
    organization: 'Global Logistics Corp',
    image: "https://images.unsplash.com/photo-1575659415977-fa2f7c49b4b8",
    alt: 'Modern cargo ship loaded with colorful shipping containers at port during sunset',
    impact: '42% Delay Reduction',
    metric: '$8M in cost savings',
    description: 'Advanced weather predictions allowed Global Logistics to proactively reroute shipments, avoiding weather-related delays and reducing fuel consumption through optimized routing.',
    category: 'Logistics'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real-World Climate Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how organizations across industries are using RIIBAI climate intelligence to reduce their environmental footprint while improving operational efficiency.
          </p>
        </div>

        <div className="space-y-12">
          {impactStories.map((story, index) =>
          <div
            key={story.id}
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`
            }>

              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-card">
                  <AppImage
                  src={story.image}
                  alt={story.alt}
                  className="w-full h-full object-cover" />

                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm">
                    {story.category}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="font-headline text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  {story.title}
                </h3>
                <div className="text-secondary font-semibold mb-4">{story.organization}</div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="ChartBarIcon" size={20} className="text-accent" />
                      <span className="text-xs text-muted-foreground">Impact</span>
                    </div>
                    <div className="text-xl font-bold text-foreground">{story.impact}</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="CloudIcon" size={20} className="text-accent" />
                      <span className="text-xs text-muted-foreground">Saved</span>
                    </div>
                    <div className="text-xl font-bold text-foreground">{story.metric}</div>
                  </div>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {story.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                  <Icon name="ArrowRightIcon" size={16} />
                  <span>Read full case study</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-headline text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Join the Climate Intelligence Revolution
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover how RIIBAI can help your organization make data-driven decisions that benefit both your operations and the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/early-access"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-conversion text-conversion-foreground font-semibold rounded-lg hover:bg-conversion/90 hover:scale-105 transition-all duration-300 shadow-card">

              <span>Join Early Access</span>
              <Icon name="ArrowRightIcon" size={20} />
            </a>
            <a
              href="/enterprise"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card text-foreground font-semibold rounded-lg border-2 border-border hover:border-secondary hover:bg-surface transition-all duration-300">

              <span>Explore Enterprise Solutions</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default ImpactSection;