'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isHydrated, targetDate]);

  if (!isHydrated) {
    return (
      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-primary/50 rounded-lg p-6 text-center animate-pulse">
            <div className="h-12 bg-secondary/20 rounded mb-2"></div>
            <div className="h-4 bg-secondary/20 rounded w-16 mx-auto"></div>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
      {timeUnits.map((unit, index) => (
        <div 
          key={index}
          className="bg-primary/50 backdrop-blur-sm rounded-lg p-6 text-center border border-secondary/20 hover:border-accent/50 transition-all duration-300"
        >
          <div className="text-4xl sm:text-5xl font-bold text-accent font-headline mb-2">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;