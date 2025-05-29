import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { SlideData } from '../types';

interface SlideAudioControllerProps {
  currentSlide: number;
  slides: SlideData[];
}

export default function SlideAudioController({ currentSlide, slides }: SlideAudioControllerProps) {
  const hasStartedEnding = useRef(false);
  const loopAudioRef = useRef<Howl | null>(null);
  const endingAudioRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Initialize only once on mount
    loopAudioRef.current = new Howl({ src: ['/Loop.mp3'], loop: true, volume: 0.5 });
    endingAudioRef.current = new Howl({ src: ['/Ending.mp3'], loop: false, volume: 0.7 });

    // Start the loop once
    loopAudioRef.current.play();

    // Cleanup on unmount
    return () => {
      loopAudioRef.current?.unload();
      endingAudioRef.current?.unload();
    };
  }, []);

  useEffect(() => {
    const loopAudio = loopAudioRef.current;
    const endingAudio = endingAudioRef.current;

    if (!loopAudio || !endingAudio) return;

    const currentSlideType = slides[currentSlide]?.type;

    if (currentSlideType === 'tokens' && !hasStartedEnding.current) {
      hasStartedEnding.current = true;

      loopAudio.stop();
      endingAudio.play();
    }
  }, [currentSlide, slides]);

  return null;
}