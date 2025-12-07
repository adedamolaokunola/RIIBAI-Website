'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ReferralProgramProps {
  userEmail?: string;
}

const ReferralProgram = ({ userEmail = 'your.email@example.com' }: ReferralProgramProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [copied, setCopied] = useState(false);
  const referralCode = 'RIIBAI2025XYZ';
  const referralLink = `https://riibai.com/early-access?ref=${referralCode}`;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleCopy = async () => {
    if (!isHydrated) return;
    
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const rewards = [
    { referrals: 3, reward: 'Extended Beta Access', icon: 'ClockIcon' },
    { referrals: 5, reward: 'Premium Features Preview', icon: 'SparklesIcon' },
    { referrals: 10, reward: 'Exclusive Founder Interview', icon: 'VideoCameraIcon' },
    { referrals: 20, reward: 'Lifetime Pro Account', icon: 'TrophyIcon' }
  ];

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg p-8 border border-border animate-pulse">
        <div className="h-8 bg-muted rounded w-48 mb-4"></div>
        <div className="h-4 bg-muted rounded w-full mb-6"></div>
        <div className="h-12 bg-muted rounded mb-6"></div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-lg p-8 border border-secondary/20">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-card-foreground mb-2 font-headline">
          Invite Friends, Unlock Rewards
        </h3>
        <p className="text-muted-foreground">
          Share RIIBAI with your network and earn exclusive benefits
        </p>
      </div>

      <div className="bg-card rounded-lg p-6 mb-6 border border-border">
        <label className="block text-sm font-medium text-card-foreground mb-2">
          Your Unique Referral Link
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 px-4 py-2 bg-background border border-input rounded-md text-foreground text-sm"
          />
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors duration-300 flex items-center whitespace-nowrap"
          >
            <Icon name={copied ? 'CheckIcon' : 'ClipboardDocumentIcon'} size={20} className="mr-2" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-4 border border-border hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mr-3">
                <Icon name={reward.icon as any} size={20} className="text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-card-foreground">
                  {reward.referrals} Referrals
                </div>
                <div className="text-xs text-muted-foreground">
                  {reward.reward}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg p-4 border border-border">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-card-foreground">Current Progress</div>
            <div className="text-xs text-muted-foreground">0 successful referrals</div>
          </div>
          <div className="text-2xl font-bold text-accent font-headline">0/3</div>
        </div>
        <div className="mt-3 w-full bg-muted rounded-full h-2">
          <div className="bg-accent h-2 rounded-full transition-all duration-300" style={{ width: '0%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;