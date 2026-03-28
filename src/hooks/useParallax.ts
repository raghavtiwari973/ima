import { useEffect, useRef } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrolled = window.scrollY;
      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementVisible = scrolled + window.innerHeight > elementTop;

      if (elementVisible) {
        const offset = (scrolled - elementTop) * speed;
        ref.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};
