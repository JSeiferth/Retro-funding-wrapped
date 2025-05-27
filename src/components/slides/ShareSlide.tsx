import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import { SlideProps } from '../../types';
import { defaultConfig } from '../../config';
import html2canvas from 'html2canvas';

const ShareSlide: React.FC<SlideProps> = ({ slide }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (cardRef.current) {
      // Save old styles
      const oldBg = cardRef.current.style.backgroundImage;
      const oldClasses = cardRef.current.className;
  
      // Apply solid gradient + remove transparent classes
      cardRef.current.style.backgroundImage =
        'linear-gradient(135deg, #ff0420 0%, #ff2030 25%, #ff4050 50%, #ff1525 75%, #ff0420 100%)';
      cardRef.current.className = oldClasses
        .replace('bg-white/20', '')
        .replace('backdrop-blur-sm', '');
  
      // Small delay to ensure styles apply before capture
      setTimeout(() => {
        html2canvas(cardRef.current!, { useCORS: true, scale: 2 }).then((canvas) => {
          const link = document.createElement('a');
          link.download = 'retro-funding-card.png';
          link.href = canvas.toDataURL();
          link.click();
  
          // Restore original styles
          cardRef.current!.style.backgroundImage = oldBg;
          cardRef.current!.className = oldClasses;
        });
      }, 100);
    }
  };
  

  return (
    <div
      ref={wrapperRef}
      className="w-full h-full flex flex-col items-center justify-center px-4"
    >
      {/* Main card container */}
      <div ref={cardRef} className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 max-w-sm w-full animate-scale-in metric-glow shadow-2xl">
        
        {/* Header with better spacing */}
        <div className="mb-6 border-b border-white/20 pb-4">
          <h2 className="text-lg font-black text-gradient mb-1">
            Optimism Retro Funding Wrapped
          </h2>
          <p className="text-xs text-white/70 font-medium"> 🛠️ Dev Tooling Impact</p>
        </div>
        
        {/* Profile section with better structure */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white/40 shadow-lg">
            <img 
              src={defaultConfig.user.profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left flex-1">
            <h3 className="text-lg font-black text-white drop-shadow-lg">{defaultConfig.user.name}</h3>
            <p className="text-sm text-white/85 font-semibold">{defaultConfig.user.project}</p>
          </div>
        </div>
        
        {/* Stats grid with better structure */}
        <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-3 text-center border border-white/20">
            <div className="text-lg font-black text-gradient">200</div>
            <div className="text-xs text-white/75 font-medium">Onchain Applications</div>
          </div>
          <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-3 text-center border border-white/20">
            <div className="text-lg font-black text-gradient">20K</div>
            <div className="text-xs text-white/75 font-medium">Transactions</div>
          </div>
        </div>
        
        {/* Top 3 projects with better structure */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-white/90">Top Users</h4>
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
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-white/90">Rewards</h4>
            <img 
              src="/sunny 2026.svg" 
              alt="Sunny celebrating" 
              className="w-6 h-6 animate-float opacity-80"
            />
          </div>
          <div className="space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-red-500 font-black text-xs">OP</span>
            </div>
            <span className="text-white font-black text-lg">15,000</span>
            <span className="text-white/90 text-sm font-medium">Earned</span>
          </div>
          </div>
        </div>
      </div>
      
      {/* Share instruction and button */}
      <p className="text-sm text-white/80 mt-4 animate-slide-in-up font-medium" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        📸 Screenshot this to share your impact!
      </p>
      <button
        onClick={handleDownload}
        className="mt-2 px-4 py-2 bg-white text-red-600 rounded-lg font-bold shadow hover:bg-red-100"
      >
        Download Card Image
      </button>
    </div>
  );
};

export default ShareSlide;