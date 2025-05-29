import React, { useEffect } from 'react';
import { SlideProps } from '../../types';
import confetti from 'canvas-confetti';

const TokensSlide: React.FC<SlideProps> = ({ slide }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      confetti({
        gravity: 0.9,
        particleCount: 400,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#FF0420', '#FFFFFF'] 
      });
    }, 500);
  
    return () => clearTimeout(timeout);
  }, []);
  

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <p className="text-lg sm:text-xl text-white/95 mb-8 animate-slide-in-up px-4 font-medium">{slide.title}</p>
      <div className="relative mb-8 animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <div className="w-48 sm:w-56 h-48 sm:h-56 rounded-full bg-gradient-to-br from-white/40 to-white/10 flex items-center justify-center mb-4 border-4 border-white/30 animate-pulse-slow metric-glow">
          <div className="text-center">
            <div className="text-5xl sm:text-7xl font-black text-gradient mb-2 tracking-tight">
              {slide.mainValue}
            </div>
            <div className="text-lg sm:text-xl text-white/90 font-semibold">{slide.unit}</div>
          </div>
        </div>
        <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        
        <img 
          src="/sunny 2026.svg" 
          alt="Sunny celebrating" 
          className="absolute -top-8 -right-8 w-16 h-16 animate-float opacity-90"
          style={{ animationDelay: '1s' }}
        />
      </div>
      <p className="text-sm sm:text-base text-white/80 max-w-md leading-relaxed px-4 animate-slide-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        {slide.subtitle}
      </p>
    </div>
  );
};

export default TokensSlide;
