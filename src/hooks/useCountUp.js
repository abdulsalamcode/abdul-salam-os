import { useEffect, useState } from "react";

// Counts from 0 up to `target` once `active` becomes true.
// Users who prefer reduced motion get the final number immediately.
function useCountUp(target, active, duration = 1200) {
  const [value, setValue] = useState(0);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!active || reduceMotion || target === 0) {
      return;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [target, active, duration, reduceMotion]);

  return reduceMotion && active ? target : value;
}

export default useCountUp;