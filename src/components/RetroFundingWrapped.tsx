import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SlideData } from '../types';
import { generateSlides, defaultConfig, AppConfig } from '../config';
import WelcomeSlide from './slides/WelcomeSlide';
import TokensSlide from './slides/TokensSlide';
import TransactionsSlide from './slides/TransactionsSlide';
import TopProjectsSlide from './slides/TopProjectsSlide';
import ExtendedProjectsSlide from './slides/ExtendedProjectsSlide';
import ShareSlide from './slides/ShareSlide';

interface RetroFundingWrappedProps {
  config?: AppConfig;
}

const RetroFundingWrapped: React.FC<RetroFundingWrappedProps> = ({ 
  config = defaultConfig 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slides: SlideData[] = generateSlides(config);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [currentSlide, slides.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [currentSlide, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [currentSlide, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  // Touch/swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const renderSlide = (slide: SlideData) => {
    switch (slide.type) {
      case 'welcome':
        return <WelcomeSlide slide={slide} />;
      case 'tokens':
        return <TokensSlide slide={slide} />;
      case 'transactions':
        return <TransactionsSlide slide={slide} />;
      case 'projects':
        return <TopProjectsSlide slide={slide} />;
      case 'extended-projects':
        return <ExtendedProjectsSlide slide={slide} />;
      case 'share':
        return <ShareSlide slide={slide} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="relative w-full h-screen op-gradient overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
      style={{ outline: 'none' }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/30 animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-white/25 animate-float"></div>
        <div className="absolute top-1/2 left-8 w-16 h-16 rounded-full bg-white/20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white/15 animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
          <div className="w-full max-w-2xl relative">
            <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'transform scale-95 opacity-50' : 'transform scale-100 opacity-100'}`}>
              {renderSlide(slides[currentSlide])}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-4 sm:p-8">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0 || isTransitioning}
            className={`p-2 rounded-full transition-all duration-200 ${
              currentSlide === 0 || isTransitioning
                ? 'text-white/30 cursor-not-allowed' 
                : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-110'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                  } ${isTransitioning ? 'cursor-not-allowed' : ''}`}
                />
              ))}
            </div>
            <div className="text-white/60 text-xs">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1 || isTransitioning}
            className={`p-2 rounded-full transition-all duration-200 ${
              currentSlide === slides.length - 1 || isTransitioning
                ? 'text-white/30 cursor-not-allowed' 
                : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-110'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs text-center">
        <div className="hidden sm:block">Use arrow keys, click dots, or swipe to navigate</div>
        <div className="sm:hidden">Swipe left or right to navigate</div>
      </div>
    </div>
  );
};

export default RetroFundingWrapped;