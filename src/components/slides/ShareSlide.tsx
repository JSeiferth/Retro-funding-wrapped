import React from 'react';
import { SlideProps } from '../../types';
import { defaultConfig } from '../../config';

const ShareSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      {/* Main card container */}
      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 max-w-sm w-full animate-scale-in metric-glow shadow-2xl">
        
        {/* Header with better spacing */}
        <div className="mb-6 border-b border-white/20 pb-4">
          <h2 className="text-lg font-black text-gradient mb-1">
            Retro Funding Wrapped
          </h2>
          <p className="text-xs text-white/70 font-medium">2024 Builder Impact</p>
        </div>
        
        {/* Profile section with better structure */}
        <div className="flex items-center space-x-4 mb-6 bg-white/10 rounded-2xl p-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/40">
            <img 
              src={defaultConfig.user.profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-base font-bold text-white">{defaultConfig.user.name}</h3>
            <p className="text-xs text-white/75 font-medium">{defaultConfig.user.project}</p>
          </div>
        </div>
        
        {/* Stats grid with better structure */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-3 text-center border border-white/20">
            <div className="text-lg font-black text-gradient">{defaultConfig.metrics.tokens.value}</div>
            <div className="text-xs text-white/75 font-medium">OP Tokens</div>
          </div>
          <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-3 text-center border border-white/20">
            <div className="text-lg font-black text-gradient">20K</div>
            <div className="text-xs text-white/75 font-medium">Transactions</div>
          </div>
        </div>
        
        {/* Top 3 projects with better structure */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-white/90">Top Projects</h4>
            <img 
              src="/sunny 2026.svg" 
              alt="Sunny celebrating" 
              className="w-6 h-6 animate-float opacity-80"
            />
          </div>
          <div className="space-y-2">
            {slide.projects?.slice(0, 3).map((project, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white/10 rounded-xl p-2.5 border border-white/15">
                <div className="w-7 h-7 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center overflow-hidden">
                  {project.icon && (
                    <img 
                      src={project.icon} 
                      alt={project.name} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <span className="text-xs font-semibold text-white flex-1 text-left">{project.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Share instruction */}
      <p className="text-sm text-white/80 mt-4 animate-slide-in-up font-medium" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
        📸 Screenshot this to share your impact!
      </p>
    </div>
  );
};

export default ShareSlide;