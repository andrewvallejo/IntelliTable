import { type RefObject, useCallback } from 'react';

/** Scrolls a container horizontally to the far left or far right */
export function useHorizontalScrollControls(
  containerRef: RefObject<HTMLElement | null>
) {
  const scrollToStart = useCallback(() => {
    containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  }, [containerRef]);

  const scrollToEnd = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
  }, [containerRef]);

  return { scrollToStart, scrollToEnd };
}
