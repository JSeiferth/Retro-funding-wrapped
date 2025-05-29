import React from 'react';
import { SlideProps } from '../../types';
import { defaultConfig } from '../../config';

const WelcomeSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="w-24 h-24 rounded-full bg-white/20 mb-8 overflow-hidden border-4 border-white/30 animate-scale-in">
        <img 
          src={slide.profileImage || defaultConfig.user.profileImage} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-gradient animate-slide-in-up tracking-tight" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
        {slide.title}
      </h1>
      <p className="text-lg sm:text-xl text-white/95 mb-12 max-w-lg leading-relaxed px-4 animate-slide-in-up font-medium" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
        {slide.subtitle}
      </p>
      <div className="flex flex-col items-center animate-slide-in-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
        <p className="text-white/80 mb-4 text-sm sm:text-base">{slide.action}</p>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSlide;