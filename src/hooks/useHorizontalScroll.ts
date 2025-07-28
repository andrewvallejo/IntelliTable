import { useEffect, useState } from 'react';

// TODO: Write JSDocs for this hook

export function useHorizontalScroll(ref: React.RefObject<HTMLElement | null>) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const scrollLeft = el.scrollLeft;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < maxScrollLeft - 1);
    };

    update();
    el.addEventListener('scroll', update);
    window.addEventListener('resize', update);

    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ref]);

  return { showLeftArrow, showRightArrow };
}
