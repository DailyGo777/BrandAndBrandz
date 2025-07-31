import { useRef, useEffect } from "react";
import { useInView, useAnimation } from "framer-motion";

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls };
};