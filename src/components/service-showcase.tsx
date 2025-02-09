import { ReactNode, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useServiceCursorStore } from "@/store/useServiceCursorStore";
import Service0 from "@assets/services/service-0.jpg";
import Service1 from "@assets/services/service-1.jpg";
import Service2 from "@assets/services/service-2.jpg";
import Service3 from "@assets/services/service-3.jpg";
import Service4 from "@assets/services/service-4.jpg";
import Service5 from "@assets/services/service-5.jpg";
import Service6 from "@assets/services/service-6.jpg";
import Service7 from "@assets/services/service-7.jpg";

interface ServiceWrapperProps {
  children: ReactNode;
}

const ServiceWrapper = ({ children }: ServiceWrapperProps) => {
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
  const imageIndex = useServiceCursorStore((state) => state.index);
  const show = useServiceCursorStore((state) => state.show);
  const EASE = 0.5;
  const HEIGHT = 300;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  const lerp = (start: number, end: number, ease: number) => {
    return (1 - ease) * start + ease * end;
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    "0": {
      top: 0,
    },
    "1": {
      top: -HEIGHT,
    },
    "2": {
      top: -HEIGHT * 2,
    },
    "3": {
      top: -HEIGHT * 3,
    },
    "4": {
      top: -HEIGHT * 4,
    },
    "5": {
      top: -HEIGHT * 5,
    },
    "6": {
      top: -HEIGHT * 6,
    },
    "7": {
      top: -HEIGHT * 7,
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
          ${cursorX - height + 320}px,
          ${cursorY - height + 320}px,
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
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed z-[999] h-[300px] w-[500px] overflow-hidden rounded-md"
    >
      <motion.div
        variants={imageVariants}
        initial={["0", "hidden"]}
        animate={[imageIndex.toString(), show ? "show" : "hidden"]}
        className="absolute top-0 h-full w-full"
      >
        <img
          src={Service0}
          alt="Exhibition, PR Event, Ceremony"
          className="size-full object-cover"
        />
        <img
          src={Service1}
          alt="Cultural Exchange Festival"
          className="size-full object-cover"
        />
        <img
          src={Service2}
          alt="Seminar Meeting, Reception, Media Conference"
          className="size-full object-cover"
        />
        <img
          src={Service3}
          alt="KOL / Media promotion"
          className="size-full object-cover"
        />
        <img
          src={Service4}
          alt="Japanese Food, Sake & Product Promotion"
          className="size-full object-cover"
        />
        <img
          src={Service5}
          alt="Japan Tourism (Inbound) Promotion"
          className="size-full object-cover"
        />
        <img
          src={Service6}
          alt="Interactive Digital Contents"
          className="size-full object-cover"
        />
        <img
          src={Service7}
          alt="Space Creative & Design"
          className="size-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceWrapper;
