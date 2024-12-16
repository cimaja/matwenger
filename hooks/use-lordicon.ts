'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    lordicon?: {
      element: (element: HTMLElement) => void;
      trigger: (element: HTMLElement) => void;
    };
  }
}

export function useLordicon(elementRef: React.RefObject<HTMLElement>) {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const initializeIcon = () => {
      if (window.lordicon && elementRef.current) {
        try {
          window.lordicon.element(elementRef.current);
        } catch (error) {
          console.error('Error initializing Lordicon:', error);
        }
      }
    };

    const loadScript = () => {
      return new Promise<void>((resolve) => {
        if (document.querySelector('script[src*="lordicon.js"]')) {
          scriptLoadedRef.current = true;
          resolve();
          return;
        }

        if (window.lordicon || scriptLoadedRef.current) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.lordicon.com/lordicon.js';
        script.async = true;
        
        script.onload = () => {
          scriptLoadedRef.current = true;
          resolve();
        };

        document.body.appendChild(script);
      });
    };

    const initialize = async () => {
      await loadScript();
      // Add a small delay to ensure the script is fully initialized
      setTimeout(initializeIcon, 100);
    };

    initialize();

    return () => {
      // Cleanup if needed
    };
  }, [elementRef]);

  const triggerAnimation = () => {
    if (elementRef.current && window.lordicon) {
      try {
        window.lordicon.trigger(elementRef.current);
      } catch (error) {
        console.error('Error triggering animation:', error);
      }
    }
  };

  return { triggerAnimation };
}