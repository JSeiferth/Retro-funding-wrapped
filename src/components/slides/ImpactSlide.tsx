import React from 'react';
import { SlideProps } from '../../types';

const ImpactSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <p className="text-lg sm:text-xl text-white/95 mb-8 animate-slide-in-up px-4 font-medium">{slide.title}</p>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8 px-4">
        {slide.metrics?.map((metric, i) => (
          <div 
            key={i} 
            className="bg-white/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/10 animate-scale-in hover:bg-white/25 hover:scale-105 transition-all duration-300" 
            style={{animationDelay: `${0.2 + i * 0.2}s`, animationFillMode: 'both'}}
          >
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-pulse-slow">
              {metric.value}
            </div>
            <div className="text-white/80 text-xs sm:text-sm">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-base sm:text-lg text-white/90 mb-4 max-w-lg leading-relaxed px-4 animate-slide-in-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
        {slide.description}
      </p>
      <p className="text-xs sm:text-sm text-white/70 max-w-lg leading-relaxed px-4 animate-slide-in-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
        {slide.subtitle}
      </p>
    </div>
  );
};

export default ImpactSlide;