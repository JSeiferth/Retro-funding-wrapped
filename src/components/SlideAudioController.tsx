import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

export default function SlideAudioController({ currentSlide, slides }) {
  const hasStartedEnding = useRef(false);
  const loopAudioRef = useRef(null);
  const endingAudioRef = useRef(null);

  useEffect(() => {
    // Initialize only once
    loopAudioRef.current = new Howl({ src: ['/Loop.mp3'], loop: true, volume: 0.5 });
    endingAudioRef.current = new Howl({ src: ['/Ending.mp3'], loop: false, volume: 0.7 });

    // Start loop immediately
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

    // Find the slide type for this index
    const currentSlideType = slides[currentSlide]?.type;

    if (currentSlideType === 'tokens' && !hasStartedEnding.current) {
        hasStartedEnding.current = true;
      
        loopAudio.stop();
        endingAudio.play();
      }
  }, [currentSlide, slides]);

  return null;
}
