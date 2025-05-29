import React, { useRef } from 'react';
import { SlideProps } from '../../types';
import domtoimage from 'dom-to-image';
import { defaultConfig } from '../../config';

const ShareSlide: React.FC<SlideProps> = ({ slide }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (cardRef.current) {
      const node = cardRef.current;
  
      const scale = 3; // ⬅️ Increase this for higher resolution (2–4 is typical)
  
      const style = {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${node.offsetWidth}px`,
        height: `${node.offsetHeight}px`,
      };
  
      domtoimage.toPng(node, {
        width: node.offsetWidth * scale,
        height: node.offsetHeight * scale,
        style,
      })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'retro-funding-card.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('❌ Error generating high-res image:', error);
      });
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-start px-4 pt-12" // add pt-12 for top space
    >
      <img 
        src="/Phoenix.png"
        alt="Ethers Phoenix"
        className="absolute top-[-200px] right-[-500px] w-[10000px] h-auto opacity-95 pointer-events-none"
      />
      <div ref={cardRef} className="w-full max-w-sm bg-gradient-to-r from-[#E9F0F8] to-[#FEECED] rounded-3xl p-6 border border-gray-300 animate-scale-in shadow-2xl flex flex-col h-full">
        <div className="mb-6 border-b items-center border-gray-300 pb-4">
          <h2 className="text-lg font-black text-black mb-1">
          Optimism Retro Funding Wrapped
          </h2>
          <p className="text-xs text-gray-700 font-medium"> 🛠️ Dev Tooling Impact</p>
        </div>
        
        <div className="flex items-center mb-6 w-full">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-gray-400 shadow-lg mr-4 flex-shrink-0">
          <img
            src={slide.profileImage || defaultConfig.user.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-1">
            <h3 className="text-base sm:text-lg font-bold text-black">
              {slide.userName}
            </h3>
            <span className="text-sm text-gray-600">received</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-black font-black text-2xl sm:text-3xl">
              {slide.tokensValue}
            </span>
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <span className="text-red-500 font-black  ml-3 text-2xl sm:text-3xl">OP</span>
            </div>
          </div>
        </div>
      </div>
        <div className="grid grid-cols-2 gap-3 mb-6 w-full">
          <div className="bg-gray-100 rounded-xl p-3 text-center border border-gray-200 flex flex-col items-center">
            <div className="text-lg font-black text-black">
              {slide.extendedProjects?.length || 0}
            </div>
            <div className="text-xs text-gray-700 font-medium">
              Onchain Applications
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-3 text-center border border-gray-200 flex flex-col items-center">
            <div className="text-lg font-black text-black">
              {slide.transactionsValue}
            </div>
            <div className="text-xs text-gray-700 font-medium">
              Transactions
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-black">Top Users</h4>
          </div>
          <div className="space-y-2">
            {slide.projects?.slice(0, 3).map((project, i) => (
              <div key={i} className="flex items-center space-x-3 bg-gray-100 rounded-xl p-2.5 border border-gray-200">
                <div className="w-7 h-7 rounded-lg bg-gray-200 border border-gray-300 flex items-center justify-center overflow-hidden">
                  {project.icon && (
                    <img 
                      src={project.icon} 
                      alt={project.name} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <span className="text-xs font-semibold text-black flex-1 text-left">{project.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="fpx-6 py-4 border-t border-gray-200 flex items-center justify-between w-full"> 
          <div className="w-16 h-16">
            <img src="/optimism.png" alt="Optimism Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-sm font-medium text-[#FF0420]">
            atlas.optimism.io
          </span>
        </div>
      </div>
      
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
