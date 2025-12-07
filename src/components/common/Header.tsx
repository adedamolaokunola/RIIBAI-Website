'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const primaryNavItems = [
    { label: 'Features', href: '/features' },
    { label: 'Technology', href: '/technology' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'About', href: '/about' },
  ];

  const secondaryNavItems = [
    { label: 'Early Access', href: '/early-access' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMoreMenuOpen(false);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary/20 ${className}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/homepage" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
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
            <span className="font-headline text-xl lg:text-2xl font-bold text-primary-foreground tracking-tight">
              RIIBAI
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-secondary/10 rounded-md transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/early-access"
              className="px-6 py-2.5 bg-conversion text-conversion-foreground font-cta font-semibold rounded-md hover:bg-conversion/90 hover:scale-105 transition-all duration-300 shadow-card"
            >
              Join Early Access
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-primary-foreground hover:bg-secondary/10 rounded-md transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-secondary/20 animate-fade-in">
          <nav className="px-4 py-4 space-y-2">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-secondary/10 rounded-md transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
            {secondaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-secondary/10 rounded-md transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/early-access"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-3 mt-4 bg-conversion text-conversion-foreground font-cta font-semibold text-center rounded-md hover:bg-conversion/90 transition-all duration-300"
            >
              Join Early Access
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;