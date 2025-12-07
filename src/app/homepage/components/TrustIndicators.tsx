import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partnership {
  id: number;
  name: string;
  logo: string;
  alt: string;
  type: string;
}

interface Metric {
  id: number;
  value: string;
  label: string;
  icon: string;
}

const mockPartnerships: Partnership[] = [
{
  id: 1,
  name: 'NASA Earth Observatory',
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c81472ce-1764435726512.png",
  alt: 'NASA logo with blue sphere and orbital ring representing space exploration and satellite technology',
  type: 'Research Partner'
},
{
  id: 2,
  name: 'European Space Agency',
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_143bda635-1764435727331.png",
  alt: 'ESA emblem with blue and white design symbolizing European space research collaboration',
  type: 'Data Provider'
},
{
  id: 3,
  name: 'Climate Research Institute',
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1634d65-1764435728477.png",
  alt: 'Globe with network connections showing climate research and global data collaboration',
  type: 'Scientific Validation'
},
{
  id: 4,
  name: 'Global Weather Network',
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17771f849-1764435725808.png",
  alt: 'Weather satellite icon with cloud patterns representing meteorological data networks',
  type: 'Technology Partner'
}];


const mockMetrics: Metric[] = [
{
  id: 1,
  value: '99.2%',
  label: 'Prediction Accuracy',
  icon: 'CheckBadgeIcon'
},
{
  id: 2,
  value: '50M+',
  label: 'Data Points Daily',
  icon: 'CircleStackIcon'
},
{
  id: 3,
  value: '24/7',
  label: 'Real-Time Monitoring',
  icon: 'ClockIcon'
},
{
  id: 4,
  value: '150+',
  label: 'Countries Covered',
  icon: 'GlobeAltIcon'
}];


const TrustIndicators = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-trust/10 rounded-full border border-trust/20 mb-4">
            <Icon name="ShieldCheckIcon" size={20} className="text-trust" variant="solid" />
            <span className="text-sm font-medium text-foreground">Trusted by Leading Organizations</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built on Scientific Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partnering with world-renowned research institutions and space agencies to deliver unparalleled climate intelligence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {mockMetrics.map((metric) =>
          <div
            key={metric.id}
            className="bg-card rounded-xl p-6 text-center border border-border hover:border-trust/50 hover:shadow-lg transition-all duration-300">

              <Icon name={metric.icon as any} size={40} className="text-trust mx-auto mb-3" variant="solid" />
              <p className="font-headline text-3xl font-bold text-card-foreground mb-2">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          )}
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="font-headline text-2xl font-bold text-card-foreground mb-8 text-center">
            Research & Technology Partners
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockPartnerships.map((partner) =>
            <div
              key={partner.id}
              className="group bg-surface rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-trust/50 transition-colors duration-300">
                  <AppImage
                  src={partner.logo}
                  alt={partner.alt}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full" />

                </div>
                <h4 className="font-semibold text-card-foreground mb-2">{partner.name}</h4>
                <p className="text-xs text-muted-foreground px-3 py-1 bg-trust/10 rounded-full inline-block">
                  {partner.type}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TrustIndicators;