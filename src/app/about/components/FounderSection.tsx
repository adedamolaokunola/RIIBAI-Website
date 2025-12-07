import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

interface Achievement {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface FounderSectionProps {
  className?: string;
}

const FounderSection = ({ className = '' }: FounderSectionProps) => {
  const timeline: TimelineEvent[] = [
  {
    id: 1,
    year: '2018',
    title: 'Climate Research Begins',
    description: 'Started doctoral research in atmospheric sciences at MIT, focusing on machine learning applications in weather prediction.'
  },
  {
    id: 2,
    year: '2020',
    title: 'AI Model Breakthrough',
    description: 'Published groundbreaking paper on neural networks for satellite data interpretation, cited over 500 times.'
  },
  {
    id: 3,
    year: '2022',
    title: 'RIIBAI Founded',
    description: 'Established RIIBAI to commercialize climate intelligence technology and make it accessible to enterprises worldwide.'
  },
  {
    id: 4,
    year: '2024',
    title: 'Global Expansion',
    description: 'Secured partnerships with 45+ research institutions and launched enterprise climate intelligence platform.'
  }];


  const achievements: Achievement[] = [
  {
    id: 1,
    icon: 'TrophyIcon',
    title: 'Climate Tech Innovator Award',
    description: 'Recognized by Global Climate Forum 2023'
  },
  {
    id: 2,
    icon: 'AcademicCapIcon',
    title: 'PhD in Atmospheric Sciences',
    description: 'Massachusetts Institute of Technology'
  },
  {
    id: 3,
    icon: 'DocumentTextIcon',
    title: '12+ Peer-Reviewed Publications',
    description: 'Leading climate and AI journals'
  },
  {
    id: 4,
    icon: 'UserGroupIcon',
    title: 'TEDx Speaker',
    description: 'Climate Intelligence & Sustainability'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our Founder
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Driven by a passion for climate science and artificial intelligence, Adedamola Okunola founded RIIBAI to bridge the gap between complex environmental data and actionable business intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_192786ee2-1763295086262.png"
                alt="Professional portrait of Adedamola Okunola, founder of RIIBAI, wearing navy blue suit with confident smile in modern office setting"
                className="w-full h-full object-cover" />

            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-xl p-6 shadow-card max-w-xs">
              <p className="font-semibold text-lg mb-1">Adedamola Okunola</p>
              <p className="text-sm opacity-90">Founder & CEO</p>
              <p className="text-xs mt-2 opacity-80">PhD, Atmospheric Sciences | AI Researcher</p>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
              A Journey of Innovation
            </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Adedamola's journey into climate intelligence began during his doctoral research at MIT, where he pioneered the use of deep learning algorithms to interpret satellite imagery for weather prediction. His groundbreaking work demonstrated that AI could achieve prediction accuracy levels previously thought impossible, reducing forecast errors by up to 40% compared to traditional models.
            </p>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              After publishing multiple peer-reviewed papers and receiving recognition from the international climate science community, Adedamola realized that his research could have far greater impact if made accessible to businesses and organizations working to reduce their carbon footprint. This vision led to the founding of RIIBAI in 2022.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Today, Adedamola leads a team of climate scientists, AI engineers, and sustainability experts who share his commitment to making climate intelligence a cornerstone of responsible business operations. His work has been featured in leading technology and environmental publications, and he regularly speaks at international conferences on the intersection of AI and climate action.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement) =>
              <div
                key={achievement.id}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">

                  <div className="flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-lg mb-3">
                    <Icon name={achievement.icon as any} size={20} className="text-secondary" />
                  </div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
          <h3 className="font-headline text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Career Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/20 hidden sm:block"></div>
            <div className="space-y-8">
              {timeline.map((event, index) =>
              <div key={event.id} className="relative pl-0 sm:pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center border-4 border-card hidden sm:flex">
                    <span className="font-bold text-secondary text-sm">{event.year}</span>
                  </div>
                  <div className="bg-surface rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-2 sm:hidden">
                      <span className="font-bold text-secondary text-sm">{event.year}</span>
                      <div className="h-px flex-1 bg-border"></div>
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">{event.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FounderSection;