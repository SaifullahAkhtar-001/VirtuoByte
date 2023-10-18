import { useState, useEffect } from "react";

export default function useWindowDimension(): number | null {
  const hasWindow: boolean = typeof window !== "undefined";

  const getWindowDimensions = (): number | null => {
    const width: number | null = hasWindow ? window.innerWidth : null;
    return width;
  };

  const [windowDimensions, setWindowDimensions] = useState<number | null>(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowDimensions;
}
