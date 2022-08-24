import { useEffect, useState } from "react";
import { sketchWidth } from "components/Sketches/constants";

export function useScalingFactor() {
  const [scale, setScale] = useState<number>(window?.innerWidth);

  useEffect(() => {
    const onResize = () => {
      const padding = 48;
      const innerWidth = window.innerWidth - padding;
      setScale(innerWidth >= sketchWidth ? 1 : innerWidth / sketchWidth);
    };

    onResize();
    window?.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return scale;
}
