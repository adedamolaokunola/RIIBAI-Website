'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  role: string;
  accessTier: string;
  interests: string[];
  referralCode: string;
}

interface EarlyAccessFormProps {
  selectedTier?: string;
}

const EarlyAccessForm = ({ selectedTier = '' }: EarlyAccessFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    role: '',
    accessTier: selectedTier,
    interests: [],
    referralCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (selectedTier) {
      setFormData(prev => ({ ...prev, accessTier: selectedTier }));
    }
  }, [selectedTier]);

  const interestOptions = [
    'Weather Prediction',
    'Carbon Analytics',
    'Risk Assessment',
    'API Integration',
    'Enterprise Solutions',
    'Research Partnership'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        role: '',
        accessTier: '',
        interests: [],
        referralCode: ''
      });
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg p-8 border border-border animate-pulse">
        <div className="space-y-6">
          {[...Array(6)].map((_, i) => (
            <div key={i}>
              <div className="h-4 bg-muted rounded w-24 mb-2"></div>
              <div className="h-10 bg-muted rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (submitSuccess) {
    return (
      <div className="bg-card rounded-lg p-8 border border-accent text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
          <Icon name="CheckCircleIcon" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-card-foreground mb-2 font-headline">
          Welcome to RIIBAI!
        </h3>
        <p className="text-muted-foreground mb-4">
          Your early access registration has been confirmed. Check your email for next steps.
        </p>
        <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
          <p className="text-sm text-card-foreground">
            <strong>Confirmation sent to:</strong> {formData.email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-card-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-card-foreground mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-card-foreground mb-2">
            Role *
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
          >
            <option value="">Select your role</option>
            <option value="sustainability">Sustainability Professional</option>
            <option value="developer">Developer/Data Scientist</option>
            <option value="executive">Enterprise Leader</option>
            <option value="researcher">Researcher</option>
            <option value="investor">Investor/Partner</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="accessTier" className="block text-sm font-medium text-card-foreground mb-2">
            Access Tier *
          </label>
          <select
            id="accessTier"
            name="accessTier"
            value={formData.accessTier}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
          >
            <option value="">Select access tier</option>
            <option value="subscriber">Basic Subscriber</option>
            <option value="beta">Beta Tester</option>
            <option value="enterprise">Enterprise Preview</option>
            <option value="investor">Investor Access</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-card-foreground mb-3">
            Areas of Interest
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {interestOptions.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestToggle(interest)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  formData.interests.includes(interest)
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="referralCode" className="block text-sm font-medium text-card-foreground mb-2">
            Referral Code (Optional)
          </label>
          <input
            type="text"
            id="referralCode"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
            placeholder="Enter referral code"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-8 py-3 bg-conversion text-conversion-foreground font-semibold rounded-md hover:bg-conversion/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Icon name="ArrowPathIcon" size={20} className="mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Join Early Access
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        By joining, you agree to receive updates about RIIBAI's launch and features.
      </p>
    </form>
  );
};

export default EarlyAccessForm;