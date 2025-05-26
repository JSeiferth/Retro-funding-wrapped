import React from 'react';
import { SlideProps } from '../../types';

const GasSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <p className="text-lg sm:text-xl text-white/90 mb-8 animate-slide-in-up px-4">{slide.title}</p>
      <div className="relative mb-8 animate-scale-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
        <div className="w-40 sm:w-48 h-40 sm:h-48 rounded-full border-4 border-white/30 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm animate-pulse-slow">
          <div className="text-center">
            <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
              {slide.mainValue}
            </div>
            <div className="text-sm sm:text-lg text-white/80">{slide.unit}</div>
          </div>
        </div>
        <div className="absolute -inset-2 rounded-full border border-white/10 animate-pulse"></div>
        <div className="absolute -inset-6 rounded-full border border-white/5 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      <p className="text-base sm:text-lg text-white/90 mb-4 max-w-lg leading-relaxed px-4 animate-slide-in-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
        {slide.description}
      </p>
      <p className="text-sm sm:text-base text-white/80 max-w-md leading-relaxed px-4 animate-slide-in-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
        {slide.subtitle}
      </p>
    </div>
  );
};

export default GasSlide;