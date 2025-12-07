import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Certification {
  id: number;
  name: string;
  icon: string;
  description: string;
  badge: string;
  badgeAlt: string;
}

interface TrustCenterProps {
  className?: string;
}

const TrustCenter = ({ className = '' }: TrustCenterProps) => {
  const certifications: Certification[] = [
  {
    id: 1,
    name: 'SOC 2 Type II',
    icon: 'ShieldCheckIcon',
    description: 'Independently audited security controls and data protection standards',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_12ccebdbe-1764435727310.png",
    badgeAlt: 'SOC 2 Type II certification badge with blue shield and checkmark symbol'
  },
  {
    id: 2,
    name: 'ISO 27001',
    icon: 'LockClosedIcon',
    description: 'International standard for information security management systems',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_119c0f056-1764435729970.png",
    badgeAlt: 'ISO 27001 certification badge with international standards organization logo'
  },
  {
    id: 3,
    name: 'GDPR Compliant',
    icon: 'DocumentCheckIcon',
    description: 'Full compliance with European data protection regulations',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1ef87727c-1764435725098.png",
    badgeAlt: 'GDPR compliance badge with European Union flag colors and data protection symbol'
  },
  {
    id: 4,
    name: 'HIPAA Ready',
    icon: 'HeartIcon',
    description: 'Healthcare data security and privacy compliance framework',
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_19c2358e9-1764435728148.png",
    badgeAlt: 'HIPAA compliance badge with medical cross and security shield emblem'
  }];


  const securityFeatures = [
  {
    icon: 'ServerIcon',
    title: 'Enterprise-Grade Infrastructure',
    description: 'Multi-region data centers with 99.99% uptime SLA and automatic failover'
  },
  {
    icon: 'KeyIcon',
    title: 'Advanced Encryption',
    description: 'AES-256 encryption at rest and TLS 1.3 for data in transit'
  },
  {
    icon: 'UserGroupIcon',
    title: 'Role-Based Access Control',
    description: 'Granular permissions and multi-factor authentication for all users'
  },
  {
    icon: 'ClockIcon',
    title: 'Continuous Monitoring',
    description: '24/7 security operations center with real-time threat detection'
  },
  {
    icon: 'DocumentDuplicateIcon',
    title: 'Regular Audits',
    description: 'Quarterly security assessments and annual penetration testing'
  },
  {
    icon: 'CloudArrowUpIcon',
    title: 'Automated Backups',
    description: 'Hourly incremental backups with 30-day retention policy'
  }];


  return (
    <section className={`bg-surface py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-trust/10 rounded-full border border-trust/20 mb-6">
            <span className="text-trust font-semibold text-sm">Security & Compliance</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Enterprise-Grade Security You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your data security and privacy are our top priorities. RIIBAI maintains the highest standards of compliance and protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert) =>
          <div
            key={cert.id}
            className="bg-card rounded-xl p-6 border border-border hover:border-trust/50 hover:shadow-xl transition-all duration-300 text-center group">

              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-trust/20 group-hover:border-trust/50 transition-colors duration-300">
                <AppImage
                src={cert.badge}
                alt={cert.badgeAlt}
                className="w-full h-full object-cover" />

              </div>
              <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-trust/20 transition-colors duration-300">
                <Icon name={cert.icon as any} size={24} className="text-trust" />
              </div>
              <h3 className="font-headline text-lg font-bold text-card-foreground mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </div>
          )}
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-lg">
          <h3 className="font-headline text-2xl font-bold text-card-foreground mb-8 text-center">
            Comprehensive Security Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) =>
            <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature.icon as any} size={24} className="text-trust" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-trust/10 to-accent/10 rounded-xl p-8 border border-trust/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-trust/20 rounded-full flex items-center justify-center">
                <Icon name="DocumentTextIcon" size={32} className="text-trust" />
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-card-foreground mb-1">
                  Transparency Reports
                </h4>
                <p className="text-sm text-muted-foreground">
                  Regular updates on our security practices and incident response
                </p>
              </div>
            </div>
            <button className="px-8 py-3 bg-trust text-trust-foreground font-semibold rounded-lg hover:bg-trust/90 transition-all duration-300 whitespace-nowrap">
              View Latest Report
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TrustCenter;