'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const DeveloperOnboarding = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const onboardingSteps: OnboardingStep[] = [
    {
      id: 1,
      title: 'Create Account',
      description: 'Sign up for RIIBAI developer access',
      icon: 'UserPlusIcon',
      details: [
        'Register with your email address',
        'Verify your account via email',
        'Complete developer profile',
        'Accept terms of service'
      ]
    },
    {
      id: 2,
      title: 'Get API Credentials',
      description: 'Generate your unique API keys',
      icon: 'KeyIcon',
      details: [
        'Navigate to API dashboard',
        'Generate new API key',
        'Store credentials securely',
        'Configure rate limits'
      ]
    },
    {
      id: 3,
      title: 'Install SDK',
      description: 'Set up RIIBAI SDK in your project',
      icon: 'CodeBracketIcon',
      details: [
        'Choose your programming language',
        'Install via package manager',
        'Import RIIBAI library',
        'Initialize with API key'
      ]
    },
    {
      id: 4,
      title: 'Make First Request',
      description: 'Test your integration with sample call',
      icon: 'BoltIcon',
      details: [
        'Use provided code examples',
        'Make test API request',
        'Verify response data',
        'Handle errors gracefully'
      ]
    },
    {
      id: 5,
      title: 'Deploy to Production',
      description: 'Launch your climate-powered application',
      icon: 'RocketLaunchIcon',
      details: [
        'Review security best practices',
        'Configure production environment',
        'Monitor API usage',
        'Scale as needed'
      ]
    }
  ];

  const currentStep = onboardingSteps.find(step => step.id === activeStep);

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Developer Onboarding
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get started with RIIBAI in minutes with our step-by-step integration guide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
              <h3 className="font-headline text-lg font-bold text-card-foreground mb-4">
                Integration Steps
              </h3>
              <div className="space-y-2">
                {onboardingSteps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeStep === step.id
                        ? 'bg-secondary text-secondary-foreground shadow-md'
                        : 'bg-surface text-foreground hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        activeStep === step.id
                          ? 'bg-secondary-foreground text-secondary'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {step.id}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{step.title}</div>
                      </div>
                      {activeStep === step.id && (
                        <Icon name="ChevronRightIcon" size={20} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-6 lg:p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <Icon name={currentStep?.icon || 'CpuChipIcon'} size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Step {activeStep} of {onboardingSteps.length}</div>
                  <h3 className="font-headline text-2xl font-bold text-card-foreground">
                    {currentStep?.title}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {currentStep?.description}
              </p>

              <div className="bg-surface rounded-lg p-6 mb-6">
                <h4 className="font-headline text-lg font-bold text-foreground mb-4">
                  What you'll do:
                </h4>
                <ul className="space-y-3">
                  {currentStep?.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5">
                        <Icon name="CheckIcon" size={16} className="text-accent" />
                      </div>
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                  disabled={activeStep === 1}
                  className="px-6 py-3 bg-muted text-muted-foreground font-semibold rounded-lg hover:bg-muted/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(onboardingSteps.length, activeStep + 1))}
                  disabled={activeStep === onboardingSteps.length}
                  className="flex-1 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {activeStep === onboardingSteps.length ? 'Complete' : 'Next Step'}
                </button>
              </div>
            </div>

            <div className="mt-6 bg-accent/10 rounded-xl p-6 border border-accent/30">
              <div className="flex items-start gap-4">
                <Icon name="LightBulbIcon" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline text-lg font-bold text-foreground mb-2">
                    Need Help?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Our developer community and support team are here to help you succeed with RIIBAI integration.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="/early-access" 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-card text-foreground font-semibold rounded-lg border border-border hover:border-secondary/50 transition-all duration-300"
                    >
                      <Icon name="ChatBubbleLeftRightIcon" size={16} />
                      Join Community
                    </a>
                    <a 
                      href="/early-access" 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-card text-foreground font-semibold rounded-lg border border-border hover:border-secondary/50 transition-all duration-300"
                    >
                      <Icon name="BookOpenIcon" size={16} />
                      View Docs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperOnboarding;