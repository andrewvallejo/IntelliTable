import {
  attachScrollAndResizeListeners,
  observeContainerAndContent,
  scheduleInitialMeasurement,
} from '@/utils/scroll';
import { useLayoutEffect, useRef, useState } from 'react';

/** A hook for managing horizontal arrow visibility */
export function useHorizontalScroll(
  containerRef: React.RefObject<HTMLElement | null>
) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const cleanupRefs = useRef<Array<() => void>>([]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(maxScrollLeft > 1 && scrollLeft < maxScrollLeft - 1);
    };

    cleanupRefs.current.push(scheduleInitialMeasurement(update));
    cleanupRefs.current.push(observeContainerAndContent(container, update));
    cleanupRefs.current.push(attachScrollAndResizeListeners(container, update));

    return () => {
      cleanupRefs.current.forEach((fn) => fn());
      cleanupRefs.current = [];
    };
  }, [containerRef]);

  return { showLeftArrow, showRightArrow };
}
