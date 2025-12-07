import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partner {
  id: number;
  name: string;
  logo: string;
  alt: string;
  category: string;
}

interface Collaboration {
  id: number;
  title: string;
  partner: string;
  description: string;
  icon: string;
}

interface PartnershipsSectionProps {
  className?: string;
}

const PartnershipsSection = ({ className = '' }: PartnershipsSectionProps) => {
  const partners: Partner[] = [
  {
    id: 1,
    name: 'MIT Climate Lab',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1634fc51a-1764435724503.png",
    alt: 'MIT Climate Lab logo featuring stylized dome building in navy blue and white',
    category: 'Research'
  },
  {
    id: 2,
    name: 'NASA Earth Observatory',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2a37482-1764435726961.png",
    alt: 'NASA Earth Observatory logo with blue marble earth and orbital path design',
    category: 'Data Provider'
  },
  {
    id: 3,
    name: 'European Space Agency',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7a9f84e-1764435725597.png",
    alt: 'European Space Agency logo with satellite and star constellation in blue',
    category: 'Data Provider'
  },
  {
    id: 4,
    name: 'Stanford Climate Institute',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a10266b6-1764435725798.png",
    alt: 'Stanford Climate Institute logo with redwood tree and mountain silhouette',
    category: 'Research'
  },
  {
    id: 5,
    name: 'NOAA Satellite Division',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a172b220-1764435725805.png",
    alt: 'NOAA Satellite Division logo featuring weather satellite and globe design',
    category: 'Data Provider'
  },
  {
    id: 6,
    name: 'Oxford Climate Research',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13d7a4e14-1764435725751.png",
    alt: 'Oxford Climate Research logo with historic building spire and leaf emblem',
    category: 'Research'
  }];


  const collaborations: Collaboration[] = [
  {
    id: 1,
    title: 'Satellite Data Integration',
    partner: 'NASA & ESA',
    description: 'Real-time access to global satellite networks providing comprehensive atmospheric data coverage',
    icon: 'GlobeAltIcon'
  },
  {
    id: 2,
    title: 'AI Model Validation',
    partner: 'MIT Climate Lab',
    description: 'Joint research program validating prediction accuracy against ground-truth measurements',
    icon: 'BeakerIcon'
  },
  {
    id: 3,
    title: 'Climate Impact Studies',
    partner: 'Stanford & Oxford',
    description: 'Collaborative research on long-term climate patterns and carbon reduction strategies',
    icon: 'DocumentTextIcon'
  },
  {
    id: 4,
    title: 'Weather Data Standards',
    partner: 'NOAA',
    description: 'Development of industry standards for AI-powered weather prediction systems',
    icon: 'ShieldCheckIcon'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Research Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            RIIBAI collaborates with leading research institutions and space agencies worldwide to advance climate intelligence and ensure the highest standards of scientific accuracy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner) =>
          <div
            key={partner.id}
            className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-3">
                <AppImage
                src={partner.logo}
                alt={partner.alt}
                className="w-full h-full object-cover" />

              </div>
              <div className="text-xs font-semibold text-foreground text-center mb-1">{partner.name}</div>
              <div className="text-xs text-muted-foreground text-center">{partner.category}</div>
            </div>
          )}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
          <h3 className="font-headline text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Active Collaborations
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {collaborations.map((collab) =>
            <div
              key={collab.id}
              className="bg-surface rounded-xl p-6 hover:shadow-md transition-shadow duration-300">

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl flex-shrink-0">
                    <Icon name={collab.icon as any} size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground mb-1">{collab.title}</h4>
                    <div className="text-sm text-secondary font-medium mb-2">{collab.partner}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{collab.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 p-6 bg-background rounded-xl border border-border">
            <div className="flex items-start gap-3">
              <Icon name="AcademicCapIcon" size={24} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Scientific Credibility</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All RIIBAI predictions undergo rigorous validation through our research partnerships. Our AI models are continuously benchmarked against ground-truth data from weather stations, ocean buoys, and atmospheric sensors worldwide. This collaborative approach ensures that our climate intelligence meets the highest standards of scientific accuracy and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PartnershipsSection;