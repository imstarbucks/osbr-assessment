import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import Speaker from "@assets/icons/animate-speaker.svg";
import Stage from "@assets/icons/animate-stage.svg";
import Mic from "@assets/icons/animate-mic.svg";
import Computer from "@assets/icons/animate-computer.svg";
import Food from "@assets/icons/animate-food.svg";
import Japan from "@assets/icons/animate-japan.svg";
import Digital from "@assets/icons/animate-digital.svg";
import Creative from "@assets/icons/animate-creative.svg";
import { useWindowSize } from "@/hooks/useWindowSize";

const text = "わくわくを、世界へ。 ";
const textArr = text.split("");

const iconsArr = [
  Speaker,
  Stage,
  Mic,
  Computer,
  Food,
  Japan,
  Digital,
  Creative,
];

const Landing = () => {
  const { width } = useWindowSize();

  const duration = 0.8;

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const variant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: duration * 3,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-12 lg:p-24">
      <div className="pt-36">
        <motion.h2
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="mb-12 flex items-center justify-center gap-1 text-2xl font-semibold sm:text-5xl"
        >
          {textArr.map((t, i) => (
            <motion.span variants={variant} key={t + i} className="">
              {t}
            </motion.span>
          ))}
        </motion.h2>
        <h2 className="mb-24 text-center text-5xl font-semibold tracking-wider md:-space-y-6 lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <motion.div
            variants={variant}
            initial={"hidden"}
            animate={"show"}
            transition={{
              duration: duration,
              delay: 1.5,
            }}
            className=""
          >
            Expand <span className="inline-block">your reach in</span>
          </motion.div>
          {width >= 687 ? (
            <motion.div
              className="grid grid-cols-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {iconsArr.map((icon, index) => (
                <motion.img
                  src={icon}
                  alt={"icon-" + index}
                  key={icon}
                  variants={variant}
                  className="pointer-events-none"
                />
              ))}
            </motion.div>
          ) : (
            <Marquee>
              {iconsArr.map((icon, index) => (
                <img
                  src={icon}
                  alt={"icon-sm-" + index}
                  key={icon}
                  className="pointer-events-none size-14"
                />
              ))}
            </Marquee>
          )}

          <motion.div
            variants={variant}
            initial={"hidden"}
            animate={"show"}
            transition={{
              duration: duration,
              delay: duration + 1.5,
            }}
            className=""
          >
            Asia and Europe
          </motion.div>
        </h2>
      </div>
      <div className="">
        <p className="text-center leading-relaxed font-semibold md:text-lg xl:text-2xl">
          SEAN諸国、欧州に拠点を持ち、
          <br />
          現地でのイベントやプロモーションをプランニング・プロデュースします。
        </p>
        <div className="mx-auto mt-12 flex w-4/5 flex-col items-start justify-start gap-y-2 rounded-full border-2 border-black px-4 py-2 md:flex-row md:items-center">
          <div>information</div>
          <div className="mx-4 hidden h-5 w-px bg-gray-300 md:block"></div>
          {width >= 687 ? (
            <div className="font-medium">
              クアラルンプールで弊社がプランニングを手掛けた盆踊り大会が行われました。
            </div>
          ) : (
            <Marquee>
              <div className="font-medium">
                クアラルンプールで弊社がプランニングを手掛けた盆踊り大会が行われました。
              </div>
            </Marquee>
          )}
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            className="mr-0 ml-auto hidden md:block"
          >
            <path
              d="M14.25 6.49695L18.25 10.4989L14.25 14.4999"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.25 10.5H18.25"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Landing;
