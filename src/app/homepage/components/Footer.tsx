'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    product: [
      { label: 'Features', href: '/features' },
      { label: 'Technology', href: '/technology' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Early Access', href: '/early-access' }
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' }
    ],
    resources: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Research', href: '/research' },
      { label: 'Blog', href: '/blog' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security', href: '/security' },
      { label: 'Compliance', href: '/compliance' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'AtSymbolIcon', href: '#' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#' },
    { name: 'GitHub', icon: 'CodeBracketIcon', href: '#' }
  ];

  if (!isHydrated) {
    return (
      <footer className="bg-primary border-t border-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="h-32 bg-secondary/20 rounded-lg animate-pulse"></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-primary border-t border-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
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
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              AI-powered climate intelligence platform transforming satellite data into actionable insights for a sustainable future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} className="text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {currentYear} RIIBAI Climate Intelligence. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <Icon name="GlobeAltIcon" size={16} className="text-accent" />
              <span>Powered by Advanced AI & Satellite Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;