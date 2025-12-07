'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  id: number;
  name: string;
  description: string;
  price: string;
  period: string;
  popular: boolean;
  features: PricingFeature[];
  cta: string;
}

interface PricingTiersProps {
  className?: string;
}

const PricingTiers = ({ className = '' }: PricingTiersProps) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const pricingTiers: PricingTier[] = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for small teams exploring climate intelligence',
      price: billingCycle === 'monthly' ? '$499' : '$4,990',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      popular: false,
      features: [
        { name: 'Up to 10 users', included: true },
        { name: 'Basic weather predictions', included: true },
        { name: 'Standard API access', included: true },
        { name: 'Email support', included: true },
        { name: 'Monthly reports', included: true },
        { name: 'Advanced analytics', included: false },
        { name: 'Custom integrations', included: false },
        { name: 'Dedicated support', included: false }
      ],
      cta: 'Start Free Trial'
    },
    {
      id: 2,
      name: 'Professional',
      description: 'Advanced features for growing organizations',
      price: billingCycle === 'monthly' ? '$1,499' : '$14,990',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      popular: true,
      features: [
        { name: 'Up to 50 users', included: true },
        { name: 'Advanced weather predictions', included: true },
        { name: 'Priority API access', included: true },
        { name: 'Priority support', included: true },
        { name: 'Weekly reports', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated support', included: false }
      ],
      cta: 'Schedule Demo'
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations',
      price: 'Custom',
      period: 'pricing',
      popular: false,
      features: [
        { name: 'Unlimited users', included: true },
        { name: 'Enterprise predictions', included: true },
        { name: 'Unlimited API access', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Real-time reports', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated account manager', included: true }
      ],
      cta: 'Contact Sales'
    }
  ];

  return (
    <section className={`bg-background py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
            <span className="text-secondary font-semibold text-sm">Flexible Pricing</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Transparent pricing designed to scale with your organization's climate intelligence needs.
          </p>

          <div className="inline-flex items-center bg-surface rounded-full p-1 border border-border">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                billingCycle === 'monthly' ?'bg-primary text-primary-foreground shadow-md' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                billingCycle === 'annual' ?'bg-primary text-primary-foreground shadow-md' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-card rounded-2xl p-8 border-2 transition-all duration-300 ${
                tier.popular
                  ? 'border-accent shadow-2xl scale-105 relative'
                  : 'border-border hover:border-accent/50 hover:shadow-xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl font-bold text-card-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {tier.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-card-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">
                    {tier.period}
                  </span>
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                  tier.popular
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:scale-105'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                {tier.cta}
              </button>

              <ul className="space-y-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon
                      name={feature.included ? 'CheckCircleIcon' : 'XCircleIcon'}
                      size={20}
                      className={`mt-0.5 flex-shrink-0 ${
                        feature.included ? 'text-success' : 'text-muted-foreground/40'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-card-foreground' : 'text-muted-foreground/60'
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
          <button className="text-secondary hover:text-secondary/80 font-semibold inline-flex items-center gap-2 transition-colors duration-300">
            Compare all features
            <Icon name="ArrowRightIcon" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;