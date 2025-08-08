import { useLayoutEffect, useRef, useState } from 'react';

/**  A hook for managing horizontal scroll visibility */
export function useHorizontalScroll(
  containerReference: React.RefObject<HTMLElement | null>
) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const animationFrameReference = useRef<number | null>(null);
  const resizeObserverReference = useRef<ResizeObserver | null>(null);

  useLayoutEffect(() => {
    const container = containerReference.current;
    if (!container) return;

    const updateVisibility = () => {
      const scrollLeft = container.scrollLeft;
      const maximumScrollLeft = container.scrollWidth - container.clientWidth;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(
        maximumScrollLeft > 1 && scrollLeft < maximumScrollLeft - 1
      );
    };

    const scheduleInitialMeasurement = () => {
      animationFrameReference.current = requestAnimationFrame(updateVisibility);
      return () => {
        if (animationFrameReference.current) {
          cancelAnimationFrame(animationFrameReference.current);
        }
      };
    };

    const startResizeObservers = () => {
      const observer = new ResizeObserver(updateVisibility);
      observer.observe(container);

      const firstChild = container.firstElementChild;
      if (firstChild instanceof HTMLElement) {
        observer.observe(firstChild);
      }

      resizeObserverReference.current = observer;
      return () => observer.disconnect();
    };

    const startEventListeners = () => {
      container.addEventListener('scroll', updateVisibility);
      window.addEventListener('resize', updateVisibility);
      return () => {
        container.removeEventListener('scroll', updateVisibility);
        window.removeEventListener('resize', updateVisibility);
      };
    };

    const stopInitialMeasurement = scheduleInitialMeasurement();
    const stopObserving = startResizeObservers();
    const removeEventListeners = startEventListeners();

    return () => {
      stopInitialMeasurement();
      stopObserving();
      removeEventListeners();
    };
  }, [containerReference]);

  return { showLeftArrow, showRightArrow };
}
