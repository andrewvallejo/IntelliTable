import { type RefObject, useCallback } from 'react';

/** A hook that scrolls a container horizontally to the start or end */
export function useHorizontalScrollControls(
  containerRef: RefObject<HTMLElement | null>
) {
  const scrollToStart = useCallback(() => {
    containerRef.current?.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  }, [containerRef]);

  const scrollToEnd = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: containerRef.current.scrollWidth,
      behavior: 'smooth',
    });
  }, [containerRef]);

  return { scrollToStart, scrollToEnd };
}
