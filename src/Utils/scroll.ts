// Shared helpers so each hook stays tiny and readable

export function scheduleInitialMeasurement(run: () => void) {
  const id = requestAnimationFrame(run);
  return () => cancelAnimationFrame(id);
}

export function observeContainerAndContent(
  container: HTMLElement,
  run: () => void
) {
  const observer = new ResizeObserver(run);
  observer.observe(container);
  const firstChild = container.firstElementChild;
  if (firstChild instanceof HTMLElement) observer.observe(firstChild);
  return () => observer.disconnect();
}

export function attachScrollAndResizeListeners(
  container: HTMLElement,
  run: () => void
) {
  container.addEventListener('scroll', run);
  window.addEventListener('resize', run);
  return () => {
    container.removeEventListener('scroll', run);
    window.removeEventListener('resize', run);
  };
}
