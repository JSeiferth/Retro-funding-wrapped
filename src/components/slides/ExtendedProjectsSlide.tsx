import React from 'react';
import { SlideProps } from '../../types';

const ExtendedProjectsSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center h-full text-center px-4 pt-6 pb-24">
      <div className="mb-4 animate-slide-in-up">
        <h2 className="text-lg sm:text-xl font-black text-gradient mb-2 tracking-tight">
          {slide.title}
        </h2>
        <p className="text-xs sm:text-sm text-white/95 font-medium max-w-2xl">
          {slide.subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-4xl w-full flex-1 overflow-y-auto animate-slide-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        {slide.extendedProjects?.map((project, i) => (
          <div
            key={i}
            className="bg-white/15 backdrop-blur-sm rounded-lg p-3 border border-white/20 animate-scale-in hover:bg-white/20 transition-all duration-300 flex items-center justify-center min-h-[60px]"
            style={{ animationDelay: `${0.3 + i * 0.02}s`, animationFillMode: 'both' }}
          >
            <h3 className="text-xs sm:text-sm font-bold text-white text-center leading-tight truncate">
              {project.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtendedProjectsSlide;