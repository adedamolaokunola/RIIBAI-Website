import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  expertise: string;
  image: string;
  alt: string;
  linkedin: string;
}

interface TeamSectionProps {
  className?: string;
}

const TeamSection = ({ className = '' }: TeamSectionProps) => {
  const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Scientist',
    expertise: 'Machine Learning & Climate Modeling',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f81f057f-1763294266278.png",
    alt: 'Professional portrait of Asian woman with long black hair wearing white lab coat in research facility',
    linkedin: '#'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'VP of Engineering',
    expertise: 'Distributed Systems & Satellite Data',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d854688-1763295573707.png",
    alt: 'Professional headshot of Black man with short hair wearing navy blue suit with confident smile',
    linkedin: '#'
  },
  {
    id: 3,
    name: 'Dr. Elena Rodriguez',
    role: 'Head of Climate Research',
    expertise: 'Atmospheric Sciences & Carbon Analytics',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1553fccea-1763293834531.png",
    alt: 'Professional portrait of Hispanic woman with brown hair in business attire holding tablet',
    linkedin: '#'
  },
  {
    id: 4,
    name: 'James Park',
    role: 'Director of Product',
    expertise: 'Enterprise Solutions & User Experience',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_194565cae-1763295572265.png",
    alt: 'Professional headshot of Asian man with glasses wearing gray suit in modern office',
    linkedin: '#'
  },
  {
    id: 5,
    name: 'Dr. Amara Okafor',
    role: 'Lead Data Scientist',
    expertise: 'Predictive Analytics & Neural Networks',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb2fd956-1763293568388.png",
    alt: 'Professional portrait of Black woman with natural hair wearing teal blazer with warm smile',
    linkedin: '#'
  },
  {
    id: 6,
    name: 'David Martinez',
    role: 'VP of Partnerships',
    expertise: 'Research Collaboration & Business Development',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1215564b9-1763294454695.png",
    alt: 'Professional headshot of Hispanic man with beard wearing charcoal suit with friendly expression',
    linkedin: '#'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            RIIBAI is powered by a diverse team of climate scientists, AI engineers, and sustainability experts united by a shared mission to make climate intelligence accessible to all.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) =>
          <div
            key={member.id}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <AppImage
                src={member.image}
                alt={member.alt}
                className="w-full h-full object-cover" />

              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-foreground mb-1">{member.name}</h3>
                <div className="text-secondary font-medium text-sm mb-2">{member.role}</div>
                <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
                <a
                href={member.linkedin}
                className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors duration-300">

                  <Icon name="UserCircleIcon" size={16} />
                  <span>View Profile</span>
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 bg-card border border-border rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-headline text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Join Our Team
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals passionate about climate science and artificial intelligence. Explore career opportunities at RIIBAI and help us build the future of climate intelligence.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 hover:scale-105 transition-all duration-300 shadow-card">

            <span>View Open Positions</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </section>);

};

export default TeamSection;