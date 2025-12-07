import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Technology', href: '/technology' },
        { label: 'Enterprise', href: '/enterprise' },
        { label: 'Early Access', href: '/early-access' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/contact' },
        { label: 'Contact', href: '/contact' },
        { label: 'Press Kit', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/technology' },
        { label: 'API Reference', href: '/technology' },
        { label: 'Research', href: '/about' },
        { label: 'Blog', href: '/homepage' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/homepage' },
        { label: 'Terms of Service', href: '/homepage' },
        { label: 'Security', href: '/homepage' },
        { label: 'Compliance', href: '/homepage' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'ChatBubbleLeftRightIcon', href: '#' },
    { name: 'LinkedIn', icon: 'UserGroupIcon', href: '#' },
    { name: 'GitHub', icon: 'CodeBracketIcon', href: '#' }
  ];

  return (
    <footer className={`bg-primary border-t border-secondary/20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/homepage" className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="24" cy="24" r="22" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                  <path d="M24 8 L24 24 L36 24" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="24" cy="24" r="3" fill="var(--color-accent)" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-secondary)" />
                      <stop offset="100%" stopColor="var(--color-accent)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-headline text-xl font-bold text-primary-foreground">RIIBAI</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-4 max-w-xs">
              AI-powered climate intelligence for sustainable futures. Transform weather data into carbon-smart decisions.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} className="text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-primary-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-secondary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} RIIBAI Climate Intelligence. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/homepage" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/homepage" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                Terms
              </Link>
              <Link href="/homepage" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;