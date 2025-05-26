import React from 'react';
import { SlideProps } from '../../types';

const TopProjectsSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-2xl sm:text-3xl font-black text-gradient mb-12 animate-slide-in-up px-4 tracking-tight">
        {slide.title}
      </h2>
      
      <div className="w-full max-w-lg space-y-6 mb-12">
        {slide.projects?.map((project, i) => (
          <div 
            key={i}
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 animate-slide-in-up hover:bg-white/25 hover:scale-105 transition-all duration-300 metric-glow"
            style={{animationDelay: `${0.2 + i * 0.15}s`, animationFillMode: 'both'}}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-white/20 border-2 border-white/30 flex items-center justify-center overflow-hidden">
                {project.icon ? (
                  <img 
                    src={project.icon} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded bg-white/30"></div>
                )}
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-white/85 font-medium">
                  {project.description}
                </p>
              </div>
              <div className="text-white/60">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center animate-slide-in-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
        <p className="text-base sm:text-lg text-white/90 mb-4 px-4">
          {slide.description}
        </p>
        <p className="text-sm sm:text-base text-white/80 px-4 max-w-lg">
          {slide.subtitle}
        </p>
      </div>
    </div>
  );
};

export default TopProjectsSlide;