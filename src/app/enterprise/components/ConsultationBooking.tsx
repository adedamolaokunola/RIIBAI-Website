'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ConsultationBookingProps {
  className?: string;
}

const ConsultationBooking = ({ className = '' }: ConsultationBookingProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    industry: '',
    interests: [] as string[],
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className={`bg-background py-20 lg:py-32 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-surface rounded w-3/4"></div>
              <div className="h-4 bg-surface rounded w-full"></div>
              <div className="h-4 bg-surface rounded w-5/6"></div>
            </div>
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-surface rounded"></div>
              <div className="h-12 bg-surface rounded"></div>
              <div className="h-12 bg-surface rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        employees: '',
        industry: '',
        interests: [],
        message: ''
      });
    }, 3000);
  };

  const interestOptions = [
    'Weather Prediction API',
    'Carbon Analytics',
    'Risk Management',
    'Custom Integration',
    'Training & Support',
    'Enterprise Dashboard'
  ];

  return (
    <section className={`bg-background py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-conversion/10 rounded-full border border-conversion/20 mb-6">
            <span className="text-conversion font-semibold text-sm">Get Started Today</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Schedule Your Enterprise Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with our climate intelligence experts to discover how RIIBAI can transform your organization's sustainability strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="font-headline text-2xl font-bold text-card-foreground mb-6">
                What to Expect
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: 'ClockIcon', text: '45-minute personalized consultation', color: 'text-secondary' },
                  { icon: 'PresentationChartLineIcon', text: 'Live demo tailored to your industry', color: 'text-accent' },
                  { icon: 'CalculatorIcon', text: 'Custom ROI analysis for your organization', color: 'text-success' },
                  { icon: 'DocumentTextIcon', text: 'Detailed implementation roadmap', color: 'text-warning' },
                  { icon: 'UserGroupIcon', text: 'Meet your dedicated account team', color: 'text-trust' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={20} className={item.color} />
                    </div>
                    <span className="text-card-foreground pt-2">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl p-8 border border-accent/20">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="SparklesIcon" size={24} className="text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-headline text-lg font-bold text-card-foreground mb-2">
                    Limited Time Offer
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book your consultation this month and receive:
                  </p>
                  <ul className="space-y-2 text-sm text-card-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircleIcon" size={16} className="text-success" />
                      Extended 30-day free trial
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircleIcon" size={16} className="text-success" />
                      Free API integration support
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircleIcon" size={16} className="text-success" />
                      Complimentary team training session
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircleIcon" size={48} className="text-success" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-card-foreground mb-4">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your consultation request has been received. Our team will contact you within 24 hours to schedule your personalized demo.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-secondary hover:text-secondary/80 font-semibold"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                      placeholder="Acme Corporation"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Company Size *
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                    >
                      <option value="">Select size</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                    >
                      <option value="">Select industry</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="energy">Energy & Utilities</option>
                      <option value="insurance">Insurance</option>
                      <option value="logistics">Logistics & Transportation</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="technology">Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-3">
                    Areas of Interest
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="w-4 h-4 text-accent bg-surface border-border rounded focus:ring-2 focus:ring-accent"
                        />
                        <span className="text-sm text-card-foreground">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-card-foreground mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground resize-none"
                    placeholder="Tell us about your climate intelligence needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-conversion text-conversion-foreground font-cta font-semibold rounded-lg hover:bg-conversion/90 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <Icon name="ArrowRightIcon" size={20} />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;