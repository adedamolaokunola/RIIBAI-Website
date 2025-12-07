import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const FounderSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-trust/10 rounded-full border border-trust/20 mb-4">
              <Icon name="UserCircleIcon" size={20} className="text-trust" variant="solid" />
              <span className="text-sm font-medium text-foreground">Leadership</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet the Visionary Behind RIIBAI
            </h2>
          </div>

          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative h-64 lg:h-auto">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_10d17e2d1-1763293910418.png"
                  alt="Professional portrait of Adedamola Okunola, African entrepreneur in navy blue suit with confident smile in modern office setting"
                  fill
                  className="object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card/80 to-transparent"></div>
              </div>

              <div className="lg:col-span-3 p-8 lg:p-12">
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-card-foreground mb-2">
                  Adedamola Okunola
                </h3>
                <p className="text-trust font-semibold mb-6">Founder & Chief Climate Scientist</p>

                <div className="space-y-4 text-muted-foreground mb-8">
                  <p className="leading-relaxed">
                    With over 15 years of experience in climate science and artificial intelligence, Adedamola founded RIIBAI to bridge the gap between complex climate data and actionable business intelligence.
                  </p>
                  <p className="leading-relaxed">
                    His groundbreaking research in satellite data analytics and machine learning has been published in leading scientific journals and has contributed to advancing global climate prediction accuracy by 23%.
                  </p>
                  <p className="leading-relaxed">
                    Adedamola's vision is to democratize access to enterprise-grade climate intelligence, empowering organizations worldwide to make informed, sustainable decisions that protect both their operations and our planet.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-surface rounded-lg p-4">
                    <Icon name="AcademicCapIcon" size={32} className="text-trust mb-2" variant="solid" />
                    <p className="text-sm text-muted-foreground mb-1">Education</p>
                    <p className="font-semibold text-card-foreground">PhD Climate Science</p>
                  </div>
                  <div className="bg-surface rounded-lg p-4">
                    <Icon name="TrophyIcon" size={32} className="text-accent mb-2" variant="solid" />
                    <p className="text-sm text-muted-foreground mb-1">Recognition</p>
                    <p className="font-semibold text-card-foreground">Climate Tech Pioneer</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                    <Icon name="DocumentTextIcon" size={16} className="text-secondary" />
                    <span className="text-sm font-medium text-card-foreground">50+ Publications</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                    <Icon name="UserGroupIcon" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-card-foreground">Global Speaker</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-trust/10 rounded-full">
                    <Icon name="GlobeAltIcon" size={16} className="text-trust" />
                    <span className="text-sm font-medium text-card-foreground">UN Climate Advisor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FounderSection;