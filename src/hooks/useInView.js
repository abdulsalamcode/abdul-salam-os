import { useEffect, useRef, useState } from "react";

// Returns [ref, inView]. inView turns true once the element
// scrolls into view and then stays true (animate once).
function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
} = {}) {
  const ref = useRef(null);

  // Very old browsers without IntersectionObserver just show everything
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

export default useInView;