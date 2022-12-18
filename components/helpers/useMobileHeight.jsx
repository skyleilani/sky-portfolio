import { useEffect } from 'react';

let windowInnerWidth = 0;

// fixed height for mobile devices
const useMobileHeight = () => {
  const handleResize = () => {
    // check if window is available or not to switch from SSR 
    if (typeof window === 'undefined') {
      return null;
    } else {
      const currentWindowInnerWidth = window.innerWidth;
      // keeping window width consistent
      if (
        windowInnerWidth === 0 ||
        currentWindowInnerWidth !== windowInnerWidth
      ) {
        windowInnerWidth = currentWindowInnerWidth;
        document.documentElement.style.setProperty(
          '--app-height',
          `${window.innerHeight}px`
        );
      }
    }
  };
  handleResize();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
};

export default useMobileHeight;
