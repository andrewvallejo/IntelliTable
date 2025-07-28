import { useEffect, useState } from 'react';

// TODO: Write JSDocs for this hook
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(() => {
    return typeof window === 'undefined'
      ? false
      : window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [query]);

  return matches;
};
