import { useState, useEffect } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver(
  targetRef: React.RefObject<HTMLElement>,
  options: UseIntersectionObserverOptions = {}
): boolean {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [targetRef, threshold, rootMargin]);

  return isIntersecting;
}
