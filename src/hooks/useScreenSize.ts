import { useState, useEffect } from "react";

const defaultBreakpoints: { [key: string]: number } = {
  mobile: 576,
  tablet: 768,
  desktop: 1366,
};

export const useScreenSize = () => {
  const breakpoints = defaultBreakpoints;
  const [screenWidth, setScreenWidth] = useState<number>(() => {
    if (typeof window === "undefined") return 1024;
    return window.innerWidth;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const screenSize = (): string => {
    if (screenWidth <= breakpoints.mobile) return "mobile";
    if (screenWidth <= breakpoints.tablet) return "tablet";
    else return "desktop";
  };

  return {
    screenSize,
  };
};
