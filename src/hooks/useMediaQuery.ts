import { useEffect, useState } from 'react';

/** A hook for detecting media query matches */
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(() => {
    return !!window?.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [query]);

  return matches;
};
