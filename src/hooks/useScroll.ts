import { type RefObject, useEffect, useState } from 'react';

export function useScroll(ref: RefObject<HTMLElement | null>) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 0);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return scrolled;
}
