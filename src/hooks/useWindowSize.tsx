import { throttle } from "@/utils/throttle";
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: undefined | number;
    height: undefined | number;
  }>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", throttle(handleResize, 300));

    handleResize();

    return () => {
      window.removeEventListener("resize", throttle(handleResize, 300));
    };
  }, []);

  return windowSize;
};
