import React from 'react';
import { SlideProps } from '../../types';

const TransactionsSlide: React.FC<SlideProps> = ({ slide }) => {
  const maxValue = slide.chartData ? Math.max(...slide.chartData.map(d => d.value)) : 1;

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <p className="text-lg sm:text-xl text-white/95 mb-4 animate-slide-in-up px-4 font-medium">{slide.title}</p>
      <div className="text-5xl sm:text-7xl font-black text-gradient mb-2 animate-scale-in tracking-tight" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
        {slide.mainValue}
      </div>
      <div className="text-lg sm:text-xl text-white/90 mb-8 animate-slide-in-up font-semibold" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>{slide.unit}</div>
      
      <div className="flex items-end justify-center space-x-2 sm:space-x-4 mb-8 h-24 sm:h-32 px-4" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
        {slide.chartData?.map((data, i) => (
          <div key={i} className="flex flex-col items-center animate-slide-in-up" style={{animationDelay: `${0.5 + i * 0.1}s`, animationFillMode: 'both'}}>
            <div 
              className="bg-gradient-to-t from-white/80 to-white/40 rounded-lg animate-grow hover:from-white/90 hover:to-white/50 transition-all duration-200 metric-glow"
              style={{ 
                height: `${(data.value / maxValue) * 80}px`,
                width: '20px',
                animationDelay: `${0.6 + i * 0.1}s`
              }}
            ></div>
            <div className="text-xs sm:text-sm text-white/70 mt-2">{data.month}</div>
          </div>
        ))}
      </div>
      
      <p className="text-sm sm:text-base text-white/90 max-w-md leading-relaxed px-4 animate-slide-in-up" style={{animationDelay: '1s', animationFillMode: 'both'}}>
        {slide.description}
      </p>
    </div>
  );
};

export default TransactionsSlide;