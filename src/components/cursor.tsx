import { ReactNode, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useCursorStore } from "@/store/useCursorStore";
import { useWindowSize } from "@/hooks/useWindowSize";

interface CursorWrapperProps {
  children: ReactNode;
}

const CursorWrapper = ({ children }: CursorWrapperProps) => {
  const { width } = useWindowSize();
  return (
    <>
      {width >= 687 && <Cursor />}
      {children}
    </>
  );
};

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const EASE = 0.15;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  const lerp = (start: number, end: number, ease: number) => {
    return (1 - ease) * start + ease * end;
  };

  const size = useCursorStore((state) => state.size);
  const label = useCursorStore((state) => state.label);

  const circleVariants = {
    none: {
      opacity: 0,
      scale: 0,
    },
    big: {
      opacity: 1,
      scale: 1,
    },
    bigger: {
      opacity: 1,
      scale: 1.2,
    },
  };

  useEffect(() => {
    const getMousePos = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const cursorAnimation = () => {
      if (cursorRef.current) {
        const height = cursorRef.current.getBoundingClientRect().height ?? 0;

        cursorX = lerp(cursorX, mouseX, EASE);
        cursorY = lerp(cursorY, mouseY, EASE);

        cursorRef.current.style.transform = `translate3d(
          ${cursorX - height}px,
          ${cursorY - height}px,
          0)`;
      }
    };

    const raf = () => {
      cursorAnimation();
      requestAnimationFrame(raf);
    };

    raf();

    window.addEventListener("pointermove", getMousePos);

    return () => {
      window.removeEventListener("pointermove", getMousePos);
    };
  }, []);

  return (
    <div ref={cursorRef} className="pointer-events-none fixed z-[999]">
      <motion.div
        variants={circleVariants}
        initial="none"
        animate={size}
        className="grid size-50 place-content-center rounded-full border border-black bg-white/20 backdrop-blur-lg"
      >
        {label}
      </motion.div>
    </div>
  );
};

export default CursorWrapper;
