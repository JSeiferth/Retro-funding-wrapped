import React from 'react';
import { SlideProps } from '../../types';

const ExtendedProjectsSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center h-full text-center px-4 py-8">
      <div className="mb-6 animate-slide-in-up">
        <h2 className="text-xl sm:text-2xl font-black text-gradient mb-3 tracking-tight">
          {slide.title}
        </h2>
        <p className="text-sm sm:text-base text-white/95 font-medium max-w-2xl">
          {slide.subtitle}
        </p>
      </div>
      
      {/* OP Logo */}
      <div className="absolute top-6 left-6 opacity-20">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-bold text-sm">OP</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-5xl w-full flex-1 overflow-y-auto animate-slide-in-up pb-16" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
        {slide.extendedProjects?.map((project, i) => (
          <div 
            key={i}
            className="bg-white/15 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20 animate-scale-in hover:bg-white/20 transition-all duration-300 h-fit"
            style={{animationDelay: `${0.3 + (i * 0.03)}s`, animationFillMode: 'both'}}
          >
            <h3 className="text-xs sm:text-sm font-bold text-white mb-1 leading-tight">
              {project.name}
            </h3>
            <p className="text-xs text-white/80 font-medium">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtendedProjectsSlide;