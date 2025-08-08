import {
  attachScrollAndResizeListeners,
  observeContainerAndContent,
  scheduleInitialMeasurement,
} from '@/utils/scroll';
import { useLayoutEffect, useRef, useState } from 'react';

/** A hook for managing vertical arrow visibility */
export function useVerticalScroll(
  containerRef: React.RefObject<HTMLElement | null>
) {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const cleanupRefs = useRef<Array<() => void>>([]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const scrollTop = container.scrollTop;
      const maxScrollTop = container.scrollHeight - container.clientHeight;
      setShowUpArrow(scrollTop > 0);
      setShowDownArrow(maxScrollTop > 1 && scrollTop < maxScrollTop - 1);
    };

    cleanupRefs.current.push(scheduleInitialMeasurement(update));
    cleanupRefs.current.push(observeContainerAndContent(container, update));
    cleanupRefs.current.push(attachScrollAndResizeListeners(container, update));

    return () => {
      cleanupRefs.current.forEach((fn) => fn());
      cleanupRefs.current = [];
    };
  }, [containerRef]);

  return { showUpArrow, showDownArrow };
}
