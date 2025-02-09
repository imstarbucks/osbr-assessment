import { motion } from "motion/react";
import Speaker from "@assets/icons/animate-speaker.svg";
import Stage from "@assets/icons/animate-stage.svg";
import Mic from "@assets/icons/animate-mic.svg";
import Computer from "@assets/icons/animate-computer.svg";
import Food from "@assets/icons/animate-food.svg";
import Japan from "@assets/icons/animate-japan.svg";
import Digital from "@assets/icons/animate-digital.svg";
import Creative from "@assets/icons/animate-creative.svg";

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
  const duration = 1.2;

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
        delayChildren: duration * 2,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section className="container mx-auto p-24">
      <div className="pt-48">
        <h2 className="mb-24 -space-y-6 text-center text-4xl font-semibold tracking-wider md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <motion.div
            variants={variant}
            initial={"hidden"}
            animate={"show"}
            transition={{
              duration: duration,
            }}
            className=""
          >
            Expand your reach in
          </motion.div>
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
                variants={item}
                className="pointer-events-none"
              />
            ))}
          </motion.div>
          <motion.div
            variants={variant}
            initial={"hidden"}
            animate={"show"}
            transition={{
              duration: duration,
              delay: duration,
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
        <div className="mx-auto mt-12 flex h-10 w-4/5 items-center justify-start rounded-4xl border-2 border-black px-4 py-2">
          <div className="">information</div>
          <div className="mx-4 h-5 w-px bg-gray-300"></div>
          <div className="font-medium">
            クアラルンプールで弊社がプランニングを手掛けた盆踊り大会が行われました。
          </div>
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            className="mr-0 ml-auto"
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
