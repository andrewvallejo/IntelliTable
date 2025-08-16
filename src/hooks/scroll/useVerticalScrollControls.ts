import { type RefObject, useCallback } from 'react';

/** Scrolls a container vertically to the very top or very bottom */
export function useVerticalScrollControls(
  containerRef: RefObject<HTMLElement | null>
) {
  const scrollToTop = useCallback(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [containerRef]);

  const scrollToBottom = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [containerRef]);

  return { scrollToTop, scrollToBottom };
}
